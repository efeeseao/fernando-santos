import { useRouter } from 'next/router'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function Newsletter() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title="Newsletter"
      subTitle="Fernando dos Santos"
      description={
        locale === 'pt-BR'
          ? 'Newsletter'
          : 'Thoughts on the software industry, programming, tech, videography, music, and my personal life.'
      }
    >
      <SectionList
        title="Newsletter"
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mb-16">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {locale === 'pt-BR'
              ? ''
              : `My newsletter provides a behind-the-scenes look into what I am
            working on and writing about. I frequently share some of my favorite
            articles I have read, as well as anything fascinating about
            technology.`}
          </p>
        </div>
      </SectionList>
    </Base>
  )
}
