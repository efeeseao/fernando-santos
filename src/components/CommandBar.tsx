/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  ActionId,
  ActionImpl
} from 'kbar'
import {
  MoonIcon,
  SunIcon,
  ClipboardIcon,
  UserIcon,
  HomeIcon,
  PencilIcon,
  ComputerDesktopIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import cn from 'classnames'

interface BaseAction {
  id?: ActionId
  name?: string
  shortcut?: string[]
  keywords?: string
  section?: string
  icon?: string | React.ReactElement | React.ReactNode
  subtitle?: string
  perform?: (currentActionImpl: ActionImpl) => any
  parent?: ActionId
  children?: React.ReactNode
  locale?: string | undefined
}

export const CommandBar = ({ children, locale }: BaseAction) => {
  const router = useRouter()
  const [, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const componentLocale = locale === 'pt-BR' ? 'pt-BR' : 'en-US'

  const actions = [
    {
      id: 'copy',
      name: componentLocale === 'pt-BR' ? 'Copiar Link' : 'Copy URL',
      shortcut: ['u'],
      keywords: componentLocale === 'pt-BR' ? 'copiar-url' : 'copy-url',
      section: 'Geral',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <ClipboardIcon className="flex h-5 w-5" />
    },
    {
      id: 'email',
      name: componentLocale === 'pt-BR' ? 'Enviar Email' : 'Send Email',
      shortcut: ['e'],
      keywords: componentLocale === 'pt-BR' ? 'enviar-email' : 'send-email',
      section: 'Geral',
      perform: () =>
        window.open('mailto:hi.fernandosantos@gmail.com', '_blank'),
      icon: <EnvelopeIcon className="flex h-5 w-5" />
    },
    {
      id: 'theme',
      name: componentLocale === 'pt-BR' ? 'Trocar tema' : 'Change theme',
      shortcut: ['t'],
      keywords: componentLocale === 'pt-BR' ? 'trocar-tema' : 'change-theme',
      section: 'Geral',
      perform: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      icon:
        resolvedTheme === 'dark' ? (
          <SunIcon className="flex h-5 w-5" />
        ) : (
          <MoonIcon className="flex h-5 w-5" />
        )
    },
    {
      id: 'home',
      name: componentLocale === 'pt-BR' ? 'Inicio' : 'Home',
      shortcut: ['g', 'h'],
      keywords: componentLocale === 'pt-BR' ? 'ir-inicio' : 'go-home',
      section: componentLocale === 'pt-BR' ? 'Ir Para' : 'Go To',
      perform: () => router.push(componentLocale === 'pt-BR' ? '/pt-BR/' : '/'),
      icon: <HomeIcon className="flex h-5 w-5" />
    },
    {
      id: 'about',
      name: componentLocale === 'pt-BR' ? 'Sobre' : 'About',
      shortcut: ['g', 'a'],
      keywords: componentLocale === 'pt-BR' ? 'ir-sobre' : 'go-about',
      section: componentLocale === 'pt-BR' ? 'Ir Para' : 'Go To',
      perform: () =>
        router.push(componentLocale === 'pt-BR' ? '/pt-BR/about' : '/about'),
      icon: <UserIcon className="flex h-5 w-5" />
    },
    {
      id: 'articles',
      name: componentLocale === 'pt-BR' ? 'Artigos' : 'Blog',
      shortcut: ['g', 'b'],
      keywords: componentLocale === 'pt-BR' ? 'ir-artigos' : 'go-blog',
      section: componentLocale === 'pt-BR' ? 'Ir Para' : 'Go To',
      perform: () =>
        router.push(componentLocale === 'pt-BR' ? '/pt-BR/blog' : '/blog'),
      icon: <PencilIcon className="flex h-5 w-5" />
    },
    {
      id: 'tools',
      name: 'Tools',
      shortcut: ['g', 'u'],
      keywords: componentLocale === 'pt-BR' ? 'ir-ferramentas' : 'go-tools',
      section: componentLocale === 'pt-BR' ? 'Ir Para' : 'Go To',
      perform: () => router.push('/tools'),
      icon: <ComputerDesktopIcon className="flex h-5 w-5" />
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: componentLocale === 'pt-BR' ? 'seguir-github' : 'fallow-github',
      section: componentLocale === 'pt-BR' ? 'Seguir' : 'Fallow',
      perform: () => window.open('https://github.com/buzzcoode', '_blank')
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords:
        componentLocale === 'pt-BR' ? 'seguir-witter' : 'fallow-twitter',
      section: componentLocale === 'pt-BR' ? 'Seguir' : 'Fallow',
      perform: () => window.open('https://twitter.com/buzzcodets', '_blank')
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords:
        componentLocale === 'pt-BR' ? 'seguir-linkedin' : 'fallow-linkedin',
      section: componentLocale === 'pt-BR' ? 'Seguir' : 'Fallow',
      perform: () => window.open('https://linkedin.com/in/buzzcode', '_blank')
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords:
        componentLocale === 'pt-BR' ? 'seguir-instagram' : 'fallow-instagram',
      section: componentLocale === 'pt-BR' ? 'Seguir' : 'Fallow',
      perform: () =>
        window.open('https://instagram.com/unclebuzzcode', '_blank')
    }
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 pt-96 py-4 pb-4 bg-neutral-900/90 dark:bg-neutral-900/80 box-border z-50">
          <KBarAnimator className="max-w-2xl w-full bg-neutral-800 dark:bg-neutral-700/20 text-neutral-400 transition-all backdrop-blur-lg rounded-lg overflow-hidden">
            <KBarSearch
              className="py-8 px-6 w-full bg-neutral-800 dark:bg-neutral-900/10 box-border text-base outline-none border-none text-neutral-300 placeholder:text-neutral-400"
              defaultPlaceholder={
                componentLocale === 'pt-BR'
                  ? 'Digite um comando ou pesquise…'
                  : 'Type a command or search…'
              }
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }: any) =>
        typeof item === 'string' ? (
          <div className="py-2 px-4 text-xs uppercase bg-neutral-900/10">
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

type Props = {
  action: BaseAction
  active: boolean
}

function RstItem({ action, active }: Props, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className={cn(
        active
          ? 'bg-neutral-800 text-neutral-300'
          : 'bg-neutral-900/10 text-neutral-400',
        'py-3 px-4 flex items-center justify-between cursor-pointer h-14 m-0'
      )}
    >
      <div className="flex gap-2 items-center">
        {action.icon && (
          <span className="flex p-px h-5 w-5 rounded align-middle self-center justify-center items-center">
            {action.icon}
          </span>
        )}
        <div className="flex flex-col">
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden className="grid grid-flow-col gap-2">
          {action.shortcut.map((shortcut) => (
            <kbd
              key={shortcut}
              className="py-1 px-2 uppercase bg-neutral-700/40 rounded"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const ResultItem = React.forwardRef(RstItem)
