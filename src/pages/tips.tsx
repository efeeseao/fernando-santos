import { useRouter } from 'next/router'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function Tips() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Tips' : 'Tips'}
      subTitle="Fernando dos Santos - Frontend Developer"
      description={
        locale === 'pt-BR'
          ? `Coleção de trechos de códigos.`
          : `A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.`
      }
      locale={locale}
    >
      <SectionList
        title={locale === 'pt-BR' ? 'Artigos' : 'Code Tips'}
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mb-16">
          <p className="mb-4 text-neutral-500 dark:text-neutral-400">
            These are a collection of code snippets I have used in the past and
            saved. Some are Serverless Functions, which include set up
            instructions. Others are anything from random CSS snippets to
            Node.js scripts.
          </p>
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2"></div>
        </div>
      </SectionList>
    </Base>
  )
}
