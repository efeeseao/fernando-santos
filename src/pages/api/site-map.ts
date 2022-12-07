/* eslint-disable @typescript-eslint/no-explicit-any */
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async (
  req: { headers: { host: any } },
  res: {
    writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void
    end: (arg0: any) => void
  }
) => {
  // An array with your pages.
  const links = [{ url: '/', changefreq: 'weekly', priority: 1 }]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: { toString: () => any }) => data.toString())

  res.end(xmlString)
}
