/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import { compareDesc } from 'date-fns'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'
import { ItemPost } from '@components/ItemPost'

import { allBlogEnUs, allBlogPtBRs } from 'contentlayer/generated'

type BlogProps = {
  locale: string
}

export function getStaticProps({ locale }: BlogProps) {
  const postLang = locale === 'pt-BR' ? allBlogPtBRs : allBlogEnUs
  const posts = postLang
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 4)
  return { props: { posts } }
}

const Blog = ({ posts }: any) => {
  const router = useRouter()
  const { locale } = router
  return (
    <Base
      title={locale === 'pt-BR' ? 'Blog' : 'Blog'}
      subTitle={
        locale === 'pt-BR' ? 'Fernando dos Santos' : 'Fernando dos Santos'
      }
      description={
        locale === 'pt-BR'
          ? 'Eu sou um desenvolvedor frontend no Brasileiro. Trabalhando na Trivod. Amante de design e tecnologia, compartilhando conhecimento pela web e colaborando com projetos OpenSource.'
          : "I'm a frontend engineer based Brazil. Working at Trivod. Lover of design and technology, sharing knowledge through the web and collaborating with OpenSource projects."
      }
      locale={locale}
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Artigos' : 'Writting'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
        isGrid
      >
        {posts.map((post: any, index: number) => (
          <ItemPost
            key={index}
            slug={`blog/${post.slug}`}
            locale={locale as string}
            title={post.title}
            description={post.description}
          />
        ))}
      </SectionList>
    </Base>
  )
}

export default Blog
