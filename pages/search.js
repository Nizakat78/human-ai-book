import { useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'

const bookData = [
  { id: 1, title: "Introduction: The Convergence of Human and Machine", chapter: "introduction", content: "human artificial intelligence convergence history" },
  { id: 2, title: "Chapter 1: The Birth of Artificial Intelligence", chapter: "chapter-1", content: "birth artificial intelligence early systems" },
  { id: 3, title: "Chapter 2: Early AI Systems and Symbolic Reasoning", chapter: "chapter-2", content: "early AI symbolic reasoning systems" },
  { id: 4, title: "Chapter 3: The AI Winter and Renewed Hope", chapter: "chapter-3", content: "AI winter renewed hope" },
  { id: 5, title: "Chapter 4: Machine Learning Revolution", chapter: "chapter-4", content: "machine learning revolution" },
  { id: 6, title: "Chapter 5: Deep Learning and Neural Networks", chapter: "chapter-5", content: "deep learning neural networks" },
  { id: 7, title: "Chapter 6: Natural Language Processing", chapter: "chapter-6", content: "natural language processing NLP" },
  { id: 8, title: "Chapter 7: Computer Vision and Perception", chapter: "chapter-7", content: "computer vision perception" },
  { id: 9, title: "Chapter 8: Robotics and Embodied AI", chapter: "chapter-8", content: "robotics embodied AI" },
  { id: 10, title: "Chapter 9: Ethics and Bias in AI", chapter: "chapter-9", content: "ethics bias AI" },
  { id: 11, title: "Chapter 10: The Future of Human-AI Collaboration", chapter: "chapter-10", content: "future human AI collaboration" }
]

const fuse = new Fuse(bookData, {
  keys: ['title', 'content'],
  threshold: 0.4,
  minChar: 2
})

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)
    if (searchQuery.length > 1) {
      setResults(fuse.search(searchQuery))
    } else {
      setResults([])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Search the Book</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search chapters and topics..."
            value={query}
            onChange={handleSearch}
            className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </h2>
            {results.map((result) => (
              <Link 
                key={result.item.id} 
                href={`/book/${result.item.chapter}`}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {result.item.title}
                </h3>
                <p className="text-gray-600">
                  Click to read this chapter and explore related content
                </p>
              </Link>
            ))}
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">
              No results found for "{query}". Try different keywords or browse all chapters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}