import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <Layout title="About - Human & AI Book">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>About This Book</h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6">
              This interactive book explores the fascinating relationship between humans and artificial intelligence. 
              Through 100 carefully crafted pages, we journey from the birth of AI to its future implications.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>100 Pages of Content:</strong> Comprehensive coverage of AI history, ethics, and future</li>
              <li><strong>Interactive Chatbot:</strong> Get answers to your questions about human-AI interaction</li>
              <li><strong>Smart Search:</strong> Quickly find topics across all chapters</li>
              <li><strong>Modern Design:</strong> Built with Next.js for fast, responsive reading</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To make the complex world of AI accessible to everyone, fostering informed discussion and responsible 
              development of intelligent technologies that benefit humanity.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}