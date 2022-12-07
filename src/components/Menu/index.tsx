import { useState, useEffect } from 'react'
import { useKBar } from 'kbar'
import NextLink from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { Container } from '@components/Container'
import { MobileMenu } from './mobile'
import { NavItem } from './items'

type NavBarProps = {
  locale?: string
}

export const Navbar = ({ locale }: NavBarProps) => {
  const [, setMounted] = useState(false)
  const { query } = useKBar()

  useEffect(() => setMounted(true), [])

  return (
    <>
      <nav className="relative">
        <Container>
          <div className="flex items-center justify-between w-full py-7">
            <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              <NextLink href="/" locale={locale}>
                buzzcode
                <span className="text-fuchsia-500 dark:text-fuchsia-400">
                  .
                </span>
              </NextLink>
            </h1>

            <div className="flex flex-row gap-2 items-center justify-center">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 hover:dark:text-neutral-300 transition-all"
                onClick={query.toggle}
              >
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
              <MobileMenu locale={locale === 'pt-BR' ? 'pt-BR' : 'en-US'} />
              <NavItem href="/blog" text="Blog" />
              <NavItem href="/tips" text="Tips" />
              <NavItem
                href="/projects"
                text={locale === 'pt-BR' ? 'Projetos' : 'Projects'}
                locale={locale}
              />
              <NavItem
                href="/about"
                text={locale === 'pt-BR' ? 'Sobre' : 'About'}
                locale={locale}
              />
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}
