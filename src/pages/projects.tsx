import { useRouter } from 'next/router'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function Projects() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Projetos' : 'Projects'}
      subTitle="Fernando dos Santos - Frontend Developer"
      description={
        locale === 'pt-BR'
          ? `Lista de projetos que ajudei a construir.`
          : `List of projects I helped build.`
      }
      locale={locale}
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Projetos' : 'Projects'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <article className="flex flex-col justify-center items-start max-w-2xl mb-16 w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 mb-8">
            {locale === 'pt-BR'
              ? `Lista de projetos pessoais, open-source e que acabei desenvolvendo para algumas empresas que passei nesses 4 anos como desenvolvedor de software.`
              : `List of personal, open-source projects that I ended up developing for some companies that I spent in these 4 years as a software developer.`}
          </p>
          <div className="prose dark:prose-dark w-full">
            <h3
              id="computer-office"
              className="text-neutral-800 dark:text-neutral-100"
            >
              Peronal
            </h3>
            <ul>
              <li>16&quot; Macbook Pro (2020)</li>
              <li>31.5&quot; LG UltraFine 32UN880</li>
              <li>Logitech MX Master 3 Mouse</li>
              <li>Apple Magic Keyboard</li>
              <li>Focal XS 2.1 w/ Subwoofer</li>
              <li>Autonomous SmartDesk 2</li>
              <li>Autonomous ErgoChair 2</li>
            </ul>
            <h3 id="coding" className="text-neutral-800 dark:text-neutral-100">
              Coding
            </h3>
            <ul>
              <li>
                Editor: VSCode (
                <a href="https://github.com/leerob/fastfeedback/blob/master/.vscode/extensions.json">
                  Extensions
                </a>
                )
              </li>
              <li>Theme: Omni</li>
              <li>Terminal: iTerm / zsh</li>
            </ul>
            <h3
              id="audio-video"
              className="text-neutral-800 dark:text-neutral-100"
            >
              Audio / Video
            </h3>
            <ul>
              <li>Sony A7III (28-50mm, 35mm f1.8)</li>
              <li>Shure SM7B + Elgato Wave XLR + Boom</li>
              <li>Elgato Camlink</li>
              <li>Logitech C920</li>
              <li>Elgato Key Light (x2)</li>
              <li>Elgato Master Mount</li>
              <li>Aputure Mark 2 120D II</li>
              <li>Aputure Light Dome II</li>
            </ul>
            <h3
              id="software"
              className="text-neutral-800 dark:text-neutral-100"
            >
              Software
            </h3>
            <ul>
              <li>1Password</li>
              <li>Spotify</li>
              <li>CleanShot X</li>
              <li>RetroClip</li>
              <li>Grammarly</li>
              <li>Texts</li>
              <li>Raycast</li>
              <li>Screenflow</li>
            </ul>
            <h3 id="music" className="text-neutral-800 dark:text-neutral-100">
              Music
            </h3>
            <ul>
              <li>Yamaha P-105 Piano</li>
              <li>Roland TD-20 V-Drums</li>
              <li>Roland AC-60</li>
              <li>Shure SM58</li>
              <li>Martin Acoustic Guitar (X-Series)</li>
            </ul>
            <h3
              id="other-tech"
              className="text-neutral-800 dark:text-neutral-100"
            >
              Other Tech
            </h3>
            <ul>
              <li>Apple Airpods Pro</li>
              <li>Apple Watch</li>
              <li>Apple iPhone</li>
              <li>Lacie USB-C External HDD</li>
              <li>Kindle</li>
              <li>Tesla Model 3</li>
            </ul>
          </div>
        </article>
      </SectionList>
    </Base>
  )
}
