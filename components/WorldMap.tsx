import { useState } from 'react'
import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'

interface ChapterMarker {
  id: number
  name: string
  chapter: string
  color: string
  orbitRadius: number
}

const chapters: ChapterMarker[] = [
  { id: 1, name: 'Introduction', chapter: 'introduction', color: '#3b82f6', orbitRadius: 45 },
  { id: 2, name: 'Ch 1: Birth of AI', chapter: 'chapter-1', color: '#8b5cf6', orbitRadius: 65 },
  { id: 3, name: 'Ch 2: Symbolic AI', chapter: 'chapter-2', color: '#a855f7', orbitRadius: 85 },
  { id: 4, name: 'Ch 3: AI Winter', chapter: 'chapter-3', color: '#d946ef', orbitRadius: 105 },
  { id: 5, name: 'Ch 4: ML Revolution', chapter: 'chapter-4', color: '#ec4899', orbitRadius: 125 },
  { id: 6, name: 'Ch 5: Deep Learning', chapter: 'chapter-5', color: '#f43f5e', orbitRadius: 145 },
  { id: 7, name: 'Ch 6: NLP', chapter: 'chapter-6', color: '#ef4444', orbitRadius: 165 },
  { id: 8, name: 'Ch 7: Computer Vision', chapter: 'chapter-7', color: '#f97316', orbitRadius: 185 },
  { id: 9, name: 'Ch 8: Robotics', chapter: 'chapter-8', color: '#f59e0b', orbitRadius: 205 },
  { id: 10, name: 'Ch 9: AI Ethics', chapter: 'chapter-9', color: '#eab308', orbitRadius: 225 },
  { id: 11, name: 'Ch 10: Future', chapter: 'chapter-10', color: '#84cc16', orbitRadius: 245 }
]

const orbitDurations = ['animate-orbit-4s', 'animate-orbit-5s', 'animate-orbit-6s', 'animate-orbit-7s', 'animate-orbit-8s', 'animate-orbit-9s', 'animate-orbit-10s', 'animate-orbit-11s', 'animate-orbit-12s', 'animate-orbit-13s', 'animate-orbit-14s']

export default function WorldMap() {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null)

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <FaGlobe className="text-blue-400 animate-pulse" />
        World Map of AI Knowledge
      </h3>
      
      <div className="relative w-full h-80 mx-auto flex items-center justify-center">
        {/* Orbit Circles - Each chapter has its own separate orbit path */}
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: chapter.orbitRadius * 2,
              height: chapter.orbitRadius * 2,
              borderWidth: '1px',
              borderColor: `${chapter.color}50`,
              borderStyle: 'dashed',
              opacity: 0.6
            }}
          />
        ))}
        
        {/* Center Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white] z-50" />
        
        {/* Bubbles orbiting on their own separate circles */}
        {chapters.map((chapter, index) => {
          const angle = (index / chapters.length) * 360 - 90
          const orbitClass = orbitDurations[index % orbitDurations.length]
          return (
            <Link
              key={chapter.id}
              href={`/book/${chapter.chapter}`}
              className={`absolute cursor-pointer group ${orbitClass}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${chapter.orbitRadius}px) rotate(${-angle}deg)`
              }}
              onMouseEnter={() => setHoveredChapter(chapter.chapter)}
              onMouseLeave={() => setHoveredChapter(null)}
            >
              {/* Bubble */}
              <div 
                className="w-5 h-5 rounded-full shadow-lg relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_25px] group-hover:border-white"
                style={{ 
                  backgroundColor: chapter.color, 
                  boxShadow: `0 0 15px ${chapter.color}`,
                  border: '2px solid white'
                }}
              />
              {/* Pulse Ring */}
              <div 
                className="absolute -top-1 -left-1 w-7 h-7 rounded-full border border-white/40 shadow-[0_0_15px] animate-ping"
                style={{ borderColor: chapter.color }}
              />
              {/* Tooltip */}
              {hoveredChapter === chapter.chapter && (
                <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 mb-1 bg-black/90 backdrop-blur text-white text-[10px] px-2 py-1 rounded-lg whitespace-nowrap z-20 border border-white/20 shadow-lg opacity-100">
                  {chapter.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                </div>
              )}
            </Link>
          )
        })}
      </div>
      
      {/* Quick Navigation Chips */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/book/${chapter.chapter}`}
            className="text-xs px-2.5 py-1 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-white/70 hover:text-white"
            style={{ color: chapter.color }}
          >
            {chapter.name.split(' ').slice(-1)[0]}
          </Link>
        ))}
      </div>
    </div>
  )
}