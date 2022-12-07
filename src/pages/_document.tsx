import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta content="#161616" name="theme-color" />
        <meta content="#161616" name="msapplication-TitleColor" />
        <meta
          content="max-snippet:-1, max-image-preview:-large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
