import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="Human & AI: An interactive book exploring the relationship between humans and artificial intelligence" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}