import Link from 'next/link'
import cn from 'classnames'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type SectionListProps = {
  children: React.ReactNode
  title: string
  locale: string
  isGrid?: boolean
  link?: string
}

export const SectionList = ({
  children,
  link,
  locale,
  title,
  isGrid
}: SectionListProps) => (
  <section className="flex flex-col py-10 md:py-20 gap-6">
    <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
      {title}
    </h2>
    <div
      className={cn(isGrid && 'md:grid-cols-2 md:gap-6', 'flex flex-col gap-4')}
    >
      {children}
    </div>
    {link && (
      <Link
        href={link}
        className="flex flex-row items-center justify-start w-auto text-sm font-medium gap-1 hover:gap-2 transition-all text-neutral-500 dark:text-neutral-400"
        locale={locale}
      >
        {locale === 'pt-BR' ? 'Ver mais' : 'Read all posts'}
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    )}
  </section>
)
