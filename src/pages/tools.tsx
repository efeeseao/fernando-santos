import Image from 'next/image'
import { useRouter } from 'next/router'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function Tools() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Ferramentas' : 'Tools'}
      subTitle="Fernando dos Santos"
      description={
        locale === 'pt-BR'
          ? 'Fernando dos Santos'
          : `Here's what tech I'm currently using for coding, videos, and music.`
      }
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Meu setup' : 'My Gear'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <article className="flex flex-col justify-center items-start max-w-2xl mb-16 w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 mb-8">
            {locale === 'pt-BR'
              ? 'Conjunto de tecnologia que uso no meu dia a dia como desenvolvedor de software...'
              : `Here is what tech I am currently using for coding, videos, and music.
            Most of these have been accumulated over the past few years, with a
            recent office upgrade in 2020.`}
          </p>
          <Image
            className="rounded-lg"
            alt={`My computer desk`}
            src={`/static/images/setup.png`}
            width={2164 / 2}
            height={1546 / 2}
            priority
          />
          <div className="prose dark:prose-dark w-full">
            <h3
              id="computer-office"
              className="text-neutral-800 dark:text-neutral-100"
            >
              Computer / Office
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
