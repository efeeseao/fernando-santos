// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  i18n: {
    localeDetection: true,
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  },
  experimental: {
    legacyBrowsers: false,
    newNextLinkBehavior: true
  }
})
