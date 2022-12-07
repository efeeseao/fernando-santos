import { useRouter } from 'next/router'
import Link from 'next/link'

import { Base } from '@layouts/Base'
import { SectionList } from '@components/SectionList'

export default function NotFound() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={
        locale === 'pt-BR'
          ? 'Pagina nao encontrada'
          : '451 - Unavailable For Legal Reasons'
      }
      subTitle="Fernando dos Santos - Frontend Developer"
    >
      <SectionList
        title={
          locale === 'pt-BR'
            ? '451 - Indisponivel por razoes legais'
            : '451 – Unavailable For Legal Reasons'
        }
        locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'}
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Why show a generic 404 when I can make it sound mysterious? It seems
            you have found something that used to exist, or you spelled
            something wrong. I am guessing you spelled something wrong. Can you
            double check that URL?
          </p>
          <Link
            href="/"
            className="p-1 sm:p-4 w-64 font-bold bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
          >
            Return Home
          </Link>
        </div>
      </SectionList>
    </Base>
  )
}
