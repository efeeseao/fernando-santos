import { useRouter } from 'next/router'
import Link from 'next/link'

import { Base } from '@layouts/Base'

export default function NotFound() {
  const router = useRouter()
  const { locale } = router

  return (
    <Base
      title={locale === 'pt-BR' ? 'Pagina nao encontrada' : '404'}
      subTitle="Fernando dos Santos"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you have found something that used to exist, or you spelled something
          wrong. I am guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Base>
  )
}
