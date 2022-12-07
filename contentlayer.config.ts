import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const BlogEN = defineDocumentType(() => ({
  name: 'BlogEnUS',
  filePathPattern: 'blog/en-US/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (enUS) => `/blog/${enUS._raw.flattenedPath}`
    }
  }
}))

const BlogBR = defineDocumentType(() => ({
  name: 'BlogPtBR',
  filePathPattern: 'blog/pt-BR/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (ptBR) => `/blog/${ptBR._raw.flattenedPath}`
    }
  }
}))

const TipsEN = defineDocumentType(() => ({
  name: 'TipsEnUS',
  filePathPattern: 'tips/en-US/*.md',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (enUS) => `/tips/${enUS._raw.flattenedPath}`
    }
  }
}))

const TipsBR = defineDocumentType(() => ({
  name: 'TipsPtBR',
  filePathPattern: 'tips/pt-BR/*.md',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (ptBR) => `/tips/${ptBR._raw.flattenedPath}`
    }
  }
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogEN, BlogBR, TipsBR, TipsEN],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
})

export default contentLayerConfig
