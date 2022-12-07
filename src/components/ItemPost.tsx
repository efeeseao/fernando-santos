import Link from 'next/link'
import cn from 'classnames'

type ItemPostProps = {
  slug?: string
  link?: string
  locale?: string
  title: string
  description: string
  extra?: string
  isGrid?: boolean
}

export const ItemPost = ({
  description,
  title,
  extra,
  isGrid,
  link,
  locale,
  slug
}: ItemPostProps) => {
  if (slug) {
    return (
      <Link
        href={slug}
        locale={locale}
        className="hover:opacity-60 transition-opacity flex flex-col gap-1.5 md:gap-0.5 cursor-pointer"
      >
        <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
        {extra && (
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            {extra}
          </span>
        )}
      </Link>
    )
  } else {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-60 transition-opacity flex flex-col gap-1.5 md:gap-0.5 cursor-pointer"
      >
        <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
        <p
          className={cn(
            isGrid && 'line-clamp-2',
            'text-base font-normal text-neutral-500 dark:text-neutral-400'
          )}
        >
          {description}
        </p>
        {extra && (
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            {extra}
          </span>
        )}
      </a>
    )
  }
}
