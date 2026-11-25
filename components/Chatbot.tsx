import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaQuoteLeft,
  FaBolt,
  FaMicrochip,
  FaSpinner,
} from 'react-icons/fa'
import { buildContext } from '../lib/rag'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  citations?: { title: string; slug: string; pageNumber: number; color: string }[]
  source?: 'local-llm' | 'book'
}

const SUGGESTIONS = [
  'What is machine learning?',
  'Who founded AI?',
  'What is deep learning?',
  'Explain AI ethics',
  'What is a transformer?',
  'What caused the AI winter?',
]

let ollamaChecked = false
let ollamaModel: string | null = null

async function findOllamaModel(): Promise<string | null> {
  if (ollamaChecked) return ollamaModel
  ollamaChecked = true
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 1500)
    const res = await fetch('http://localhost:11434/api/tags', { signal: controller.signal })
    clearTimeout(timer)
    if (!res.ok) return null
    const data = await res.json()
    const models: string[] = (data.models || []).map((m: { name: string }) => m.name)
    ollamaModel = models.length > 0 ? models[0] : null
    return ollamaModel
  } catch {
    return null
  }
}

async function askOllama(model: string, question: string, context: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 30000)
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful assistant for the book "Human & AI". Answer ONLY using the provided book context. ' +
              'If the context is insufficient, say so briefly. Keep answers concise and clear.\n\nContext:\n' +
              context,
          },
          { role: 'user', content: question },
        ],
      }),
    })
    clearTimeout(timer)
    if (!res.ok) return null
    const data = await res.json()
    return data?.message?.content?.trim() || null
  } catch {
    return null
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the assistant for this book. I answer strictly from its 110 pages — ask me anything about AI, from its history to ethics and the future.",
      sender: 'bot',
      source: 'book',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isThinking])

  const handleSendMessage = async (text?: string) => {
    const question = (text ?? inputMessage).trim()
    if (!question || isThinking) return

    setMessages((prev) => [...prev, { id: Date.now(), text: question, sender: 'user' }])
    setInputMessage('')
    setIsThinking(true)

    const built = buildContext(question)

    if (!built) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I couldn't find that in the book. Try asking about AI history, machine learning, deep learning, NLP, robotics, ethics, or the future of human-AI collaboration.",
          sender: 'bot',
          source: 'book',
        },
      ])
      setIsThinking(false)
      return
    }

    const model = await findOllamaModel()
    let answerText = built.result.answer
    let source: 'local-llm' | 'book' = 'book'

    if (model) {
      const llmAnswer = await askOllama(model, question, built.context)
      if (llmAnswer) {
        answerText = llmAnswer
        source = 'local-llm'
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 2,
        text: answerText,
        sender: 'bot',
        citations: built.result.citations,
        source,
      },
    ])
    setIsThinking(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', boxShadow: '0 8px 30px rgba(59,130,246,0.5)' }}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <FaTimes size={22} /> : <FaRobot size={26} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white animate-pulse" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col z-[99] border border-white/10 animate-slide-up overflow-hidden">
          <div
            className="text-white p-4 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)' }}
          >
            <div className="p-2 rounded-xl bg-white/15">
              <FaRobot size={22} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold leading-tight">Book Assistant</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <FaBolt size={10} /> Free · Offline RAG · Grounded in this book
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-white/10 text-white/90 rounded-bl-sm border border-white/10'
                  }`}
                  style={message.sender === 'user' ? { background: 'linear-gradient(135deg, #3b82f6, #a855f7)' } : {}}
                >
                  {message.sender === 'bot' && message.source === 'local-llm' && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-green-300 mb-1">
                      <FaMicrochip size={10} /> Local LLM
                    </span>
                  )}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {message.citations && message.citations.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1">
                        <FaQuoteLeft size={9} /> Sources
                      </span>
                      {message.citations.slice(0, 3).map((c) => (
                        <Link
                          key={c.slug}
                          href={`/book/${c.slug}`}
                          className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: c.color }}
                          />
                          <span className="truncate">{c.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2 text-white/60">
                  <FaSpinner className="animate-spin" size={14} />
                  <span className="text-xs">Searching the book…</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSendMessage(s)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about the book…"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/40 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isThinking || !inputMessage.trim()}
                className="text-white p-3 rounded-xl transition disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)' }}
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}