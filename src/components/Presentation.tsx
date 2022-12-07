import Image from 'next/image'

import { Container } from '@components/Container'
import { Shortcut } from '@components/Shortcut'

export const Presentation = ({ locale }: { locale?: string }) => {
  return (
    <header>
      <Container>
        <div className="flex flex-col md:flex-row py-14 gap-6 md:gap-12 md:py-28">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src="/images/fernando.JPG"
              alt="Fernando dos Santos"
              width={160}
              height={160}
              className="flex w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
              Fernando dos Santos
              <span className="text-fuchsia-500 dark:text-fuchsia-400">.</span>
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software developer at{' '}
              <span className="font-semibold">Creative Labs</span>
            </h2>
            <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">
              {locale === 'pt-BR'
                ? 'Eu sou um desenvolvedor frontend angolano. Trabalhando na Creative Labs. Entusiasta de design e amante de tecnologia, compartilhando conhecimento pela web e colaborando com projetos OpenSource.'
                : "I'm an Angolan frontend developer. Working at Creative Labs. Design enthusiast and technology lover, sharing knowledge over the web and collaborating with OpenSource projects."}
            </p>
            <Shortcut locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  )
}
