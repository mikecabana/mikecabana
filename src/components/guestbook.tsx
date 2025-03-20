'use client'

import { Button } from './ui/button'
import NextLink from 'next/link'
import { signGuestbook } from '@/app/actions'
import { useActionState, useState } from 'react'
import { Turnstile } from 'next-turnstile'

export type GuestbookFormState = {
  message: string
  success: boolean
  error: boolean
}

const initialState: GuestbookFormState = {
  success: false,
  error: false,
  message: '',
}

export function Guestbook({ signed = false }: { signed: boolean }) {
  const [state, formAction, pending] = useActionState(signGuestbook, initialState)

  const [messageCount, setMessageCount] = useState(0)

  return (
    <div className="bg-primary text-background dark:text-foreground dark:bg-accent inline-block p-8 rounded-xl">
      <h3 className="text-xl text-center mb-2">Guestbook</h3>
      <p className="text-center mb-4 opacity-75">Sign the guestbook!</p>

      <form action={formAction}>
        <div className="grid columns-1 gap-4 mb-8 text-foreground">
          <div>
            <textarea
              className="px-4 py-2 rounded-lg w-full"
              id="message"
              name="message"
              placeholder="Message*"
              required
              maxLength={42}
              onChange={(e) => setMessageCount(e.target.value.length)}
            />
            <div className="text-xs text-right text-muted-foreground">
              {signed ? 0 : messageCount}/42
            </div>
          </div>

          <input
            className="px-4 py-2 rounded-lg text-foreground"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />

          <input
            className="px-4 py-2 rounded-lg text-foreground"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          theme="auto"
          onError={() => setMessageCount(0)}
        />

        {state.error && (
          <div className="text-xs text-center text-red-500 mb-4">{state.message}</div>
        )}

        <div className="text-center mb-4">
          <Button type="submit" disabled={pending || state.success || signed}>
            {signed ? 'Signed!' : pending ? 'Submitting...' : state.success ? 'Signed!' : 'Submit'}
          </Button>
        </div>
        <div className="text-center max-w-40 mx-auto">
          <NextLink className="text-sm hover:underline group" href="/guests">
            See who else signed the guestbook{' '}
            <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2 ">
              👉🏻
            </span>
          </NextLink>
        </div>
      </form>
    </div>
  )
}
