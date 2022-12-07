import { useRouter } from 'next/router'
import { compareDesc } from 'date-fns'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'
import { ItemPost } from '@components/ItemPost'

import { allBlogEnUs, allBlogPtBRs } from 'contentlayer/generated'

type HomeProps = {
  locale: string
}

export function getStaticProps({ locale }: HomeProps) {
  const postLang = locale === 'pt-BR' ? allBlogPtBRs : allBlogEnUs
  const posts = postLang
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 4)
  return { props: { posts } }
}

type PostProps = {
  slug: string
  locale?: string
  title: string
  description: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = ({ posts }: any) => {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Inicio' : 'Home'}
      subTitle="Fernando dos Santos - Frontend Developer"
      description={
        locale === 'pt-BR'
          ? 'Página inicial do site/blog'
          : 'Website/blog home page'
      }
      locale={locale}
      hasPresentation
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Artigos' : 'Writting'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
        link="/blog"
      >
        {posts.map(
          ({ description, title, locale }: PostProps, index: number) => (
            <ItemPost
              key={index}
              slug="#"
              locale={locale}
              title={title}
              description={description}
            />
          )
        )}
      </SectionList>
    </Base>
  )
}

export default Home
