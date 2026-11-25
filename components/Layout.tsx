import Link from 'next/link'
import ThreeBackground from '../components/ThreeBackground'
import Chatbot from '../components/Chatbot'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ThreeBackground />
      
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-white drop-shadow-lg">
                  Human & AI
                </span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link href="/search" className="inline-flex items-center text-white/90 hover:text-blue-300 px-1 pt-1 border-b-2 border-transparent hover:border-blue-400 transition">
                Search
              </Link>
              <Link href="/book/introduction" className="inline-flex items-center text-white/90 hover:text-blue-300 px-1 pt-1 border-b-2 border-transparent hover:border-blue-400 transition">
                Read Book
              </Link>
              <Link href="/about" className="inline-flex items-center text-white/90 hover:text-blue-300 px-1 pt-1 border-b-2 border-transparent hover:border-blue-400 transition">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 relative z-10">
        {children}
      </main>

      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <p className="text-white/80">&copy; 2026 Human & AI Book. All rights reserved.</p>
            <p className="text-white/80">An interactive exploration of human-AI relationship</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  )
}