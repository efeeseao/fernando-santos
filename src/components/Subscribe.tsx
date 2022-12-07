import { useState, useRef } from 'react'
import useSWR from 'swr'

import fetcher from '@lib/fetcher'
import { Form, FormState, Subscribers } from '@lib/types'
import { Container } from '@components/Container'
import { ErrorMessage, LoadingSpinner, SuccessMessage } from '@components/Icons'

type NewsletterProps = {
  locale?: string
}

export const Subscribe = ({ locale }: NewsletterProps) => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputEl = useRef(null as any)
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher)
  const subscriberCount = new Number(data?.count)

  const subscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setForm({ state: Form.Loading })

    const email = inputEl.current.value
    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST'
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: Form.Success,
      message:
        locale === 'pt-BR' ? 'Você está na lista.' : `You're now on the list.`
    })
  }

  return (
    <section>
      <Container isLarge>
        <div className="flex gap-6 flex-col justify-center align-center border-y md:border md:rounded-2xl border-neutral-200 dark:border-neutral-800 p-6 md:p-12 md:mx-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              {locale === 'pt-BR'
                ? 'Subscrever-se a newsletter'
                : 'Subscribe to the newsletter'}
            </h2>
            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">
              {locale === 'pt-BR'
                ? 'Receba e-mails sobre desenvolvimento, tecnologia e acesso antecipado a novos conteúdos.'
                : 'Get emails from me about web development, tech, and early access to new articles.'}
            </p>
          </div>

          <form
            onSubmit={subscribe}
            className="relative flex flex-col md:flex-row w-full gap-3"
          >
            <input
              ref={inputEl}
              aria-label={
                locale === 'pt-BR'
                  ? 'Email para a newsletter'
                  : 'Email for newsletter'
              }
              placeholder="buzzcode@email.com"
              type="email"
              autoComplete="email"
              required
              className="appearance-none border-2 w-full text-base font-semibold bg-white dark:bg-neutral-900 py-3 px-6 border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 hover:dark:border-neutral-700 rounded-lg placeholder:text-color-neutral-500 placeholder:dark:text-color-neutral-400 transition-all focus:outline-0 focus:ring-0 focus:border-neutral-400"
            />
            <button
              className="appearance-none border-2 w-full md:w-60 text-base font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50 py-3 px-6 border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 hover:dark:border-neutral-700 rounded-lg cursor-pointer transition-all"
              type="submit"
            >
              {form.state === Form.Loading ? (
                <LoadingSpinner />
              ) : locale === 'pt-BR' ? (
                'Inscreva-se'
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          {form.state === Form.Error ? (
            <ErrorMessage>{form.message}</ErrorMessage>
          ) : form.state === Form.Success ? (
            <SuccessMessage>{form.message}</SuccessMessage>
          ) : (
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 text-left">
              {`${
                subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
              } ${locale === 'pt-BR' ? 'inscritos' : 'subscribers'} – `}
              <a
                className="text-blue-500 dark:text-blue-400 hover:opacity-70 transition-opacity"
                href="https://www.getrevue.co/profile/buzzcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'pt-BR' ? 'Ver todas' : 'View all'} issues
              </a>
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
