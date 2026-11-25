import { useState, useMemo } from 'react'
import Link from 'next/link'
import { FaSearch, FaArrowRight } from 'react-icons/fa'
import { allPages, chapters } from '../lib/bookContent'

interface Hit {
  slug: string
  pageNumber: number
  title: string
  chapterTitle: string
  color: string
  snippet: string
  score: number
}

function search(query: string): Hit[] {
  const terms = query.toLowerCase().match(/[a-z0-9]+/g)?.filter((t) => t.length > 1) || []
  if (terms.length === 0) return []
  const hits: Hit[] = []
  for (const page of allPages) {
    const haystack = `${page.title} ${page.paragraphs.join(' ')} ${page.keyPoints.join(' ')}`.toLowerCase()
    let score = 0
    for (const term of terms) {
      const idx = haystack.indexOf(term)
      if (idx >= 0) score += 1
    }
    if (score > 0) {
      const pos = haystack.indexOf(terms[0])
      const start = Math.max(0, pos - 40)
      const snippet = (start > 0 ? '…' : '') + haystack.slice(start, start + 120).trim() + '…'
      hits.push({
        slug: page.slug,
        pageNumber: page.pageNumber,
        title: page.title,
        chapterTitle: page.chapterTitle,
        color: page.chapterColor,
        snippet,
        score,
      })
    }
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, 30)
}

export default function Search() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => search(query), [query])

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative z-10 flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold mb-3">
              <span className="gradient-text-animated">Search the Book</span>
            </h1>
            <p className="text-white/60">Search across all {allPages.length} pages of real content</p>
          </div>

          <div className="relative mb-10">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              autoFocus
              placeholder="Search topics, e.g. neural networks, ethics, Turing…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 text-lg bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/40"
            />
          </div>

          {!query && (
            <div className="flex flex-wrap gap-2 justify-center">
              {['neural networks', 'Turing', 'ethics', 'transformer', 'robotics', 'AGI', 'bias', 'deep learning'].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {query.length > 0 && results.length > 0 && (
            <div className="space-y-3">
              <p className="text-white/50 text-sm mb-2">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>
              {results.map((r) => (
                <Link
                  key={r.slug}
                  href={`/book/${r.slug}`}
                  className="block group bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-white/30 hover:bg-black/40 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full" style={{ background: r.color }} />
                    <span className="text-xs uppercase tracking-wider" style={{ color: r.color }}>
                      {r.chapterTitle} · Page {r.pageNumber}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition flex items-center justify-between">
                    {r.title}
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{r.snippet}</p>
                </Link>
              ))}
            </div>
          )}

          {query.length > 0 && results.length === 0 && (
            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
              <p className="text-yellow-200">
                No results for "{query}". Try different keywords or browse the chapters.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {chapters.slice(0, 6).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/book/${c.slug}`}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white"
                  >
                    {c.subtitle}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}