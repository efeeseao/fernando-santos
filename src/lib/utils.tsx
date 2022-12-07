import { format, parseISO } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'

type Props = {
  text: string
  locale: string
}

export const DatePost = ({ locale, text }: Props) => {
  const dateLocale = locale === 'pt-BR' ? ptBR : enUS

  const date = format(parseISO(text), 'MMM dd, yyyy', {
    locale: dateLocale
  })

  const arr = date.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const str2 = arr.join(' ')

  return str2
}

export const timeToRead = ({ locale, text }: Props) => {
  const readingTimeText = text.split(' ')
  const readingTimeNumber = readingTimeText[0]
  const readingTimeUnit = readingTimeText[1]
  const readingTime = `${readingTimeNumber} ${readingTimeUnit}`

  return `${readingTime} ${locale === 'pt-BR' ? 'de Leitura' : 'read'}`
}
