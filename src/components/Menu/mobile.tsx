import { useEffect, useState } from 'react'
import useDelayedRender from 'use-delayed-render'
import cn from 'classnames'
import NextLink from 'next/link'

import { CrossIcon, MenuIcon } from './icons'

import styles from '@styles/menu.module.css'

export const MobileMenu = ({ locale }: { locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  )

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute inset-y-24 inset-x-0 px-6 bg-white dark:bg-neutral-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 hover:dark:text-neutral-500 text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <NextLink href="/blog" className="flex w-auto pb-4">
              Blog
            </NextLink>
          </li>
          <li
            className="border-b border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 hover:dark:text-neutral-500 text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <NextLink href="/tips" className="flex w-auto pb-4">
              Tips
            </NextLink>
          </li>
          <li
            className="border-b border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 hover:dark:text-neutral-500 text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <NextLink
              href={locale === 'pt-BR' ? '/projetos' : '/projects'}
              className="flex w-auto pb-4"
            >
              {locale === 'pt-BR' ? 'Projetos' : 'Projects'}
            </NextLink>
          </li>
          <li
            className="border-b border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 hover:dark:text-neutral-500 text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <NextLink
              href={locale === 'pt-BR' ? '/sobre' : '/about'}
              className="flex w-auto pb-4"
            >
              {locale === 'pt-BR' ? 'Sobre' : 'About'}
            </NextLink>
          </li>
        </ul>
      )}
    </>
  )
}
