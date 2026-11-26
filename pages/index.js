import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Human & AI: A Journey Through Intelligence
        </h1>
        
        <p className={styles.description}>
          An interactive book exploring the relationship between humans and artificial intelligence
        </p>

        <div className={styles.grid}>
          <Link href="/book/introduction" className={styles.card}>
            <h2>Introduction &rarr;</h2>
            <p>Understanding the foundation of human-AI interaction</p>
          </Link>

          <Link href="/book/chapter-1" className={styles.card}>
            <h2>Chapter 1 &rarr;</h2>
            <p>The birth of artificial intelligence</p>
          </Link>

          <Link href="/search" className={styles.card}>
            <h2>Search &rarr;</h2>
            <p>Find topics across all chapters</p>
          </Link>

          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn about this interactive book</p>
          </Link>
        </div>
      </main>
    </div>
  )
}