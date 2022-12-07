import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Navbar } from '@components/Menu'
import { Container } from '@components/Container'
import { Footer } from '@components/Footer'
import { Subscribe } from '@components/Subscribe'

type PostLayoutProps = {
  children: React.ReactNode
  title: string
  description: string
  thumb?: string
  locale?: string
  extra?: string
  postSlug?: string
}

export const PostLayout = ({
  children,
  description,
  title,
  extra,
  locale,
  postSlug,
  thumb
}: PostLayoutProps) => {
  const baseURL = 'https://fernandosantos.vercel.app'
  const image = thumb
    ? `${baseURL}/${thumb}`
    : `${baseURL}/api/og-image/?title=${title}&top=${extra}&postSlug=${postSlug}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          url: `${locale === 'pt-BR' ? `${baseURL}/pt-BR/` : `${baseURL}/`}`,
          locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
          title: title,
          description: description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: 'Og Image Alt',
              type: 'image/png'
            }
          ],
          site_name: 'Buzzcode'
        }}
        twitter={{
          handle: '@buzzcodets',
          site: '@buzzcode',
          cardType: 'summary_large_image'
        }}
      />
      <Navbar locale={locale} />

      <header>
        <Container>
          <div className="py-4 md:py-6">
            <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
          </div>
        </Container>
        {thumb && (
          <Image
            src={thumb}
            alt={title}
            width={896}
            height={448}
            className="object-cover md:rounded-lg"
          />
        )}
      </header>

      <main className="py-6 md:py-12">
        <Container>{children}</Container>
      </main>

      <Subscribe locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
