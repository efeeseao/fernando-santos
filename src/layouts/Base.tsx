import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Container } from '@components/Container'
import { Navbar } from '@components/Menu'
import { Footer } from '@components/Footer'
import { Presentation } from '@components/Presentation'
import { Subscribe } from '@components/Subscribe'

type BaseProps = {
  children: React.ReactNode
  title: string
  locale?: string
  subTitle: string
  description?: string
  hasPresentation?: boolean
}

export const Base = ({
  children,
  description,
  locale,
  subTitle,
  title,
  hasPresentation
}: BaseProps) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>{`${title} | ${subTitle}`}</title>
    </Head>
    <NextSeo
      openGraph={{
        type: 'website',
        url: `https://fernandosantos.vercel.app${
          locale === 'pt-BR' ? '/pt-BR/' : '/'
        }`,
        locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
        title: `${title} - ${subTitle}`,
        description: description,
        images: [
          {
            url: `https://fernandosantos.vercel.app/api/og/?title=${title}&subtitle=${subTitle}`,
            width: 1200,
            height: 630,
            alt: 'Og Image Alt',
            type: 'image/png'
          }
        ],
        site_name: 'Fernando dos Santos'
      }}
      twitter={{
        handle: '@buzzcodets',
        site: '@buzzcodets',
        cardType: 'summary_large_image'
      }}
    />
    <Navbar locale={locale} />

    {hasPresentation && <Presentation locale={locale} />}
    <main>
      <Container>{children}</Container>
    </main>
    <Subscribe locale={locale} />
    <Footer locale={locale} />
  </>
)
