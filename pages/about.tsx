import Link from 'next/link'
import { FaBook, FaRobot, FaSearch, FaCube, FaPalette, FaArrowRight } from 'react-icons/fa'
import { totalPages, chapters } from '../lib/bookContent'

const features = [
  {
    icon: <FaBook />,
    color: '#3b82f6',
    title: `${totalPages} Pages of Real Content`,
    text: 'Original, unique writing across every page — from the birth of AI to ethics and the future of collaboration.',
  },
  {
    icon: <FaRobot />,
    color: '#a855f7',
    title: 'Free Offline Assistant',
    text: 'A retrieval-augmented assistant that answers strictly from this book. No API keys, no cost — and it can use a local Ollama model if you have one.',
  },
  {
    icon: <FaSearch />,
    color: '#06b6d4',
    title: 'Instant Search',
    text: 'Find any topic across all pages with ranked, highlighted results.',
  },
  {
    icon: <FaCube />,
    color: '#ec4899',
    title: 'Immersive 3D',
    text: 'A live Three.js background and an animated knowledge map bring the book to life.',
  },
  {
    icon: <FaPalette />,
    color: '#22c55e',
    title: 'World-Class Design',
    text: 'Glassmorphism, animated gradients, scroll reveals and reading progress — built to feel premium.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative z-10 flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="gradient-text-animated">About This Book</span>
            </h1>
            <p className="text-white/60 text-lg">An interactive exploration of human and artificial intelligence</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              This book explores the relationship between humans and artificial intelligence through{' '}
              {totalPages} pages of original content across {chapters.length} chapters. It journeys from
              the first dreams of thinking machines, through the symbolic era, the AI winters, the
              machine-learning and deep-learning revolutions, into language, vision and robotics — and
              closes with ethics and the future of human-AI collaboration.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-6 border-b border-white/20 pb-3">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="p-2 rounded-lg"
                      style={{ background: `${f.color}22`, color: f.color }}
                    >
                      {f.icon}
                    </span>
                    <h3 className="text-white font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 text-center">
              <p className="text-white/90 text-lg italic">
                "The future is not written by machines alone, but by the humans who create and guide them."
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/introduction"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-white font-semibold rounded-xl transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)' }}
              >
                Start Reading <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-3.5 text-white font-semibold rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition"
              >
                <FaSearch className="mr-2" /> Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}