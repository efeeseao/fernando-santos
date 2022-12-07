import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'

import { CommandBar } from '@components/CommandBar'
import '@styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale } = router

  return (
    <ThemeProvider attribute="class">
      <CommandBar locale={locale}>
        <Component {...pageProps} />
      </CommandBar>
    </ThemeProvider>
  )
}
