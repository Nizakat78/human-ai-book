import Link from 'next/link'
import { FaBook, FaRobot, FaSearch, FaArrowRight, FaLayerGroup, FaFileAlt } from 'react-icons/fa'
import WorldMap from '../components/WorldMap'
import { chapters, totalPages } from '../lib/bookContent'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <main className="flex-1 relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/70 text-sm mb-8 animate-fade-in backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              An interactive book · {totalPages} pages · Free AI assistant
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-none">
              <span className="gradient-text-animated">Human</span>
              <span className="text-white/40 mx-2">&</span>
              <span className="gradient-text-animated">AI</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              A journey through the convergence of human and machine intelligence — from the first
              dreams of thinking machines to the future of working together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/introduction"
                className="group inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', boxShadow: '0 10px 40px rgba(59,130,246,0.4)' }}
              >
                <FaBook className="mr-2" /> Start Reading
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition backdrop-blur"
              >
                <FaSearch className="mr-2" /> Search the Book
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14">
              {[
                { icon: <FaFileAlt />, value: totalPages, label: 'Pages' },
                { icon: <FaLayerGroup />, value: chapters.length, label: 'Chapters' },
                { icon: <FaRobot />, value: 'Free', label: 'AI Assistant' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-blue-400 flex justify-center mb-2 text-xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="gradient-text-animated">Explore the Chapters</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {chapters.map((chapter, i) => (
                  <Link
                    key={chapter.slug}
                    href={`/book/${chapter.slug}`}
                    className="group relative overflow-hidden rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-0.5 opacity-60 group-hover:opacity-100 transition"
                      style={{ background: chapter.color }}
                    />
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: chapter.color }}
                      >
                        {chapter.number === 0 ? 'Introduction' : `Chapter ${chapter.number}`}
                      </span>
                      <span className="text-white/30 text-xs">{chapter.pages.length} pages</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-white">
                      {chapter.subtitle}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2">{chapter.description}</p>
                    <span
                      className="absolute bottom-4 right-4 text-white/0 group-hover:text-white/70 transition-all group-hover:translate-x-0 -translate-x-2"
                    >
                      <FaArrowRight />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <WorldMap />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}