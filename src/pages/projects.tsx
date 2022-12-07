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
              {locale === 'pt-BR' ? 'Projetos pessoais' : 'Personal projects'}
            </h3>
            <ul>
              <li>
                <a
                  href="https://fernando-santos.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://coderoot.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Coderoot
                </a>
              </li>
              <li>
                <a
                  href="https://blog-kriandu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Kriandu Blog
                </a>
              </li>
              <li>
                <a
                  href="https://zanduglobal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  ZanduGlobal
                </a>
              </li>
              <li>
                <a
                  href="https://cla-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Cla da literatura
                </a>
              </li>
              <li>
                <a
                  href="https://mercadopeixe.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Mercado do peixe
                </a>
              </li>
              <li>
                <a
                  href="https://paga3.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Paga3
                </a>
              </li>
              <li>
                <a
                  href="https://kriandu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Kriandu
                </a>
              </li>
              <li>
                <a
                  href="https://trilha.info/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 dark:text-neutral-100"
                >
                  Trilha info
                </a>
              </li>
            </ul>
          </div>
        </article>
      </SectionList>
    </Base>
  )
}
