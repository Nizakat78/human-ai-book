import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Chatbot from '../components/Chatbot'
import ThreeBackground from '../components/ThreeBackground'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThreeBackground />
      <Component {...pageProps} />
      <Chatbot />
    </>
  )
}

export default MyApp