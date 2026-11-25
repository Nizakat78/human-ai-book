import { allPages, totalPages } from './bookContent'

export interface RagDocument {
  slug: string
  pageNumber: number
  title: string
  chapterTitle: string
  chapterSlug: string
  color: string
  sentences: string[]
  text: string
}

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'of', 'to', 'in', 'on', 'for', 'with', 'is', 'are',
  'was', 'were', 'be', 'been', 'being', 'it', 'its', 'this', 'that', 'these', 'those', 'as',
  'at', 'by', 'from', 'into', 'about', 'what', 'which', 'who', 'whom', 'how', 'why', 'when',
  'where', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'should', 'may', 'might',
  'i', 'you', 'he', 'she', 'we', 'they', 'me', 'my', 'your', 'their', 'our', 'not', 'no',
  'yes', 'so', 'if', 'then', 'than', 'there', 'here', 'all', 'any', 'some', 'more', 'most',
])

function tokenize(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9]+/g) || []).filter(
    (t) => t.length > 1 && !STOP_WORDS.has(t),
  )
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20)
}

const documents: RagDocument[] = allPages.map((page) => {
  const sentences = [
    ...page.paragraphs.flatMap(splitSentences),
    ...page.keyPoints,
  ]
  return {
    slug: page.slug,
    pageNumber: page.pageNumber,
    title: page.title,
    chapterTitle: page.chapterTitle,
    chapterSlug: page.chapterSlug,
    color: page.chapterColor,
    sentences,
    text: `${page.title}. ${page.paragraphs.join(' ')} ${page.keyPoints.join(' ')}`,
  }
})

const docTokens = documents.map((d) => tokenize(d.text))
const docTokenCounts = docTokens.map((tokens) => {
  const counts = new Map<string, number>()
  for (const t of tokens) counts.set(t, (counts.get(t) || 0) + 1)
  return counts
})

const df = new Map<string, number>()
for (const counts of docTokenCounts) {
  for (const term of counts.keys()) df.set(term, (df.get(term) || 0) + 1)
}

const N = documents.length
function idf(term: string): number {
  return Math.log((N + 1) / ((df.get(term) || 0) + 1)) + 1
}

function scoreDocument(queryTerms: string[], index: number): number {
  const counts = docTokenCounts[index]
  const length = docTokens[index].length || 1
  let score = 0
  for (const term of queryTerms) {
    const tf = counts.get(term)
    if (tf) score += (tf / length) * idf(term) * 10
  }
  return score
}

function scoreSentence(sentence: string, queryTerms: string[]): number {
  const tokens = tokenize(sentence)
  if (tokens.length === 0) return 0
  const set = new Set(tokens)
  let score = 0
  for (const term of queryTerms) if (set.has(term)) score += idf(term)
  return score / Math.sqrt(tokens.length)
}

export interface RagResult {
  best: RagDocument
  ranked: { doc: RagDocument; score: number }[]
  answer: string
  citations: { title: string; slug: string; pageNumber: number; color: string }[]
}

export function retrieve(query: string, topK = 3): RagResult | null {
  const queryTerms = tokenize(query)
  if (queryTerms.length === 0) return null

  const ranked = documents
    .map((doc, i) => ({ doc, score: scoreDocument(queryTerms, i) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)

  if (ranked.length === 0) return null

  const bestSentences: { text: string; doc: RagDocument; score: number }[] = []
  for (const { doc } of ranked) {
    for (const sentence of doc.sentences) {
      bestSentences.push({ text: sentence, doc, score: scoreSentence(sentence, queryTerms) })
    }
  }
  bestSentences.sort((a, b) => b.score - a.score)

  const picked: string[] = []
  const seen = new Set<string>()
  for (const s of bestSentences) {
    const key = s.text.slice(0, 40).toLowerCase()
    if (seen.has(key)) continue
    if (s.score <= 0 && picked.length > 0) break
    seen.add(key)
    picked.push(s.text)
    if (picked.length >= 3) break
  }

  const answer =
    picked.length > 0
      ? picked.join(' ')
      : `I found a related section: "${ranked[0].doc.title}".`

  const citations = ranked.map(({ doc }) => ({
    title: doc.title,
    slug: doc.slug,
    pageNumber: doc.pageNumber,
    color: doc.color,
  }))

  return { best: ranked[0].doc, ranked, answer, citations }
}

export function buildContext(query: string): { context: string; result: RagResult } | null {
  const result = retrieve(query, 4)
  if (!result) return null
  const context = result.ranked
    .map(({ doc }) => `[${doc.title}]\n${doc.sentences.slice(0, 6).join(' ')}`)
    .join('\n\n')
  return { context, result }
}

export const bookStats = { pages: totalPages, documents: documents.length }