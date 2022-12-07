import { useRouter } from 'next/router'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function About() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Sobre' : 'About'}
      subTitle="Fernando dos Santos - Frontend Developer"
      description={
        locale === 'pt-BR'
          ? 'Eu sou um desenvolvedor frontend angolano. Trabalhando na Creative Labs. Entusiasta de design e amante de tecnologia, compartilhando conhecimento pela web e colaborando com projetos OpenSource.'
          : "I'm an Angolan frontend developer. Working at Creative Labs. Design enthusiast and technology lover, sharing knowledge over the web and collaborating with OpenSource projects."
      }
      locale={locale}
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Sobre' : 'About'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <section className="flex flex-col justify-center items-start max-w-2xl mb-16 w-full">
          <div className="mb-8 text-neutral-800 dark:text-neutral-100 leading-6">
            <h2>{locale === 'pt-BR' ? 'Olá!' : 'Hello!'}</h2>
            <p>
              {locale === 'pt-BR'
                ? `Meu nome é Fernando dos Santos. Trabalho como Desenvolvedor Front-end desde 2018. Sou apaixonado tecnologia e entusiasta de projetos open source, acredito que a disseminação de conhecimento e boas idéias inspira e melhora o mundo.

                  Atualmente estou trabalhando como Software developer em um projeto pessoal.`
                : `My name is Fernando dos Santos. I've been working as a Front-end Developer since 2018. I'm passionate about technology and an enthusiast of open source projects, I believe that the dissemination of knowledge and good ideas inspires and improves the world.

                  I'm currently working as a Software developer on a personal project.`}
            </p>
          </div>
          <div className="prose dark:prose-dark w-full">
            <h3 id="books" className="text-neutral-800 dark:text-neutral-100">
              {locale === 'pt-BR' ? 'Livros recomendados' : 'Recommended books'}
            </h3>
            <ul>
              <li>
                14 hábitos de desenvovedores altamente produtivos - Zeno Rocha
              </li>
              <li>Hiperfoco - Chris Bailey</li>
              <li>Storrytelling - Carmine Gallo</li>
              <li>
                Micro-hábitos: As pequenas mudanças que mudam tudo - B.J.Fogg
              </li>
              <li>
                Vai lá e faz: como empreender na era digital e tirar ideias do
                papel - Tiago Mattos
              </li>
              <li>The Pragmatic Programmer - Andrew Hunt David Hurst Thomas</li>
              <li>
                Roube como um artista: 10 dicas sobre criatividade - Austin
                Kleon
              </li>
            </ul>
          </div>
        </section>
      </SectionList>
    </Base>
  )
}
