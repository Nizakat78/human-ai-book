import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaListUl,
  FaQuoteLeft,
  FaLightbulb,
  FaArrowUp,
} from 'react-icons/fa'
import {
  allPages,
  chapters,
  getNeighbours,
  getPage,
  getChapterPages,
  totalPages,
  BookPage,
} from '../../lib/bookContent'

interface ReaderPage {
  slug: string
  pageNumber: number
  title: string
  paragraphs: string[]
  keyPoints: string[]
  quote: BookPage['quote'] | null
  fact: BookPage['fact'] | null
  chapterSlug: string
  chapterTitle: string
  chapterColor: string
}

interface Props {
  page: ReaderPage
}

export default function Reader({ page }: Props) {
  const [progress, setProgress] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)
  const { prev, next, index } = getNeighbours(page.slug)
  const chapterPages = getChapterPages(page.chapterSlug)
  const chapter = chapters.find((c) => c.slug === page.chapterSlug)

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const scrolled = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      setProgress(scrolled)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [page.slug])

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    els.forEach((el) => el.classList.add('reveal-visible'))
  }, [page.slug])

  const accent = page.chapterColor

  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-[width] duration-150"
        style={{
          width: `${progress * 100}%`,
          background: `linear-gradient(90deg, ${accent}, #a855f7)`,
          boxShadow: `0 0 12px ${accent}`,
        }}
      />

      <div className="relative z-10 flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-white/80 hover:text-white font-medium transition inline-flex items-center gap-2"
            >
              <FaHome /> <span className="hidden sm:inline">Home</span>
            </Link>
            <button
              onClick={() => setTocOpen((v) => !v)}
              className="text-white/80 hover:text-white font-medium transition inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <FaListUl /> <span className="hidden sm:inline">Contents</span>
            </button>
          </div>

          {tocOpen && (
            <div className="mb-6 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {chapterPages.map((cp) => (
                  <Link
                    key={cp.slug}
                    href={`/book/${cp.slug}`}
                    className={`text-sm px-3 py-2 rounded-lg border transition ${
                      cp.slug === page.slug
                        ? 'text-white border-white/40 bg-white/10'
                        : 'text-white/70 border-white/10 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {cp.pageNumber}. {cp.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            <article
              ref={articleRef}
              className="bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border border-white/10"
              style={{ boxShadow: `0 20px 60px -20px ${accent}40` }}
            >
              <div data-reveal className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}
                  >
                    {page.chapterTitle}
                  </span>
                  <span className="text-white/50 text-sm">Page {page.pageNumber} of {totalPages}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                  {page.title}
                </h1>
              </div>

              <div className="space-y-6">
                {page.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    data-reveal
                    className="reveal text-white/85 leading-relaxed text-lg"
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div data-reveal className="reveal mt-10">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span style={{ color: accent }}>◆</span> Key Points
                </h2>
                <ul className="space-y-3">
                  {page.keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                      <span
                        className="mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                      />
                      <span className="text-white/85">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {page.quote && (
                <div
                  data-reveal
                  className="reveal mt-10 relative p-6 rounded-xl border-l-4"
                  style={{
                    borderColor: accent,
                    background: `linear-gradient(90deg, ${accent}22, transparent)`,
                  }}
                >
                  <FaQuoteLeft className="absolute top-4 right-4 opacity-20" style={{ color: accent }} size={32} />
                  <p className="text-white/90 italic text-lg pr-8">"{page.quote.text}"</p>
                  <p className="text-white/60 mt-3">— {page.quote.author}</p>
                </div>
              )}

              {page.fact && (
                <div
                  data-reveal
                  className="reveal mt-6 flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <FaLightbulb style={{ color: accent }} className="mt-1" />
                  <p className="text-white/80">{page.fact}</p>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-4">
                {prev ? (
                  <Link
                    href={`/book/${prev.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition border border-white/10"
                  >
                    <FaChevronLeft className="mr-2" />
                    <span className="text-left">
                      <span className="block text-[10px] uppercase tracking-wider text-white/50">Previous</span>
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/book/${next.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 text-white rounded-lg transition hover:shadow-lg"
                    style={{ background: `linear-gradient(90deg, ${accent}, #a855f7)` }}
                  >
                    <span className="text-right">
                      <span className="block text-[10px] uppercase tracking-wider text-white/70">Next</span>
                      {next.title}
                    </span>
                    <FaChevronRight className="ml-2" />
                  </Link>
                ) : (
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-white rounded-lg transition"
                    style={{ background: `linear-gradient(90deg, ${accent}, #a855f7)` }}
                  >
                    Back to Home <FaChevronRight className="ml-2" />
                  </Link>
                )}
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-5">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider text-white/60">
                  {chapter?.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{chapter?.subtitle}</p>
                <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                  {chapterPages.map((cp) => (
                    <Link
                      key={cp.slug}
                      href={`/book/${cp.slug}`}
                      className={`block text-sm px-3 py-2 rounded-lg transition ${
                        cp.slug === page.slug
                          ? 'text-white bg-white/10'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                      style={cp.slug === page.slug ? { borderLeft: `3px solid ${accent}` } : {}}
                    >
                      {cp.pageNumber}. {cp.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-center text-white/50 text-xs">
                  Page {index + 1} / {totalPages}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition"
            >
              <FaArrowUp /> Back to top
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPages.map((p) => ({ params: { slug: [p.slug] } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params!.slug.join('/') : (params?.slug as string)
  const page = getPage(slug)
  if (!page) return { notFound: true }
  const normalized = {
    slug: page.slug,
    pageNumber: page.pageNumber,
    title: page.title,
    paragraphs: page.paragraphs,
    keyPoints: page.keyPoints,
    quote: page.quote ?? null,
    fact: page.fact ?? null,
    chapterSlug: page.chapterSlug,
    chapterTitle: page.chapterTitle,
    chapterColor: page.chapterColor,
  }
  return { props: { page: normalized } }
}