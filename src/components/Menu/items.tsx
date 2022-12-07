import { useRouter } from 'next/router'
import NextLink from 'next/link'
import cn from 'classnames'

type NavItemProps = {
  href: string
  text: string
  locale?: string
}

export const NavItem = ({ href, text, locale }: NavItemProps) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink
      href={href}
      locale={locale}
      className={cn(
        isActive
          ? 'text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 hover:dark:text-neutral-200'
          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300',
        'px-3.5 py-2.5 text-sm hidden md:flex rounded-lg transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  )
}
