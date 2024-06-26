'use client'
import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { useEffect } from 'react'
import { useWallet } from '@/lib/contexts/wallet-context'

export function EmptyScreen() {
  const { wallet } = useWallet()

  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          {wallet ? 'Wallet connected' : 'Wallet not connected'}
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source AI chatbot app template built with{' '}
        </p>
        <p className="leading-normal text-muted-foreground">
          It uses to combine text with generative UI as output of the LLM. The
          UI state is synced through the SDK so the model is aware of your
          interactions as they happen.
        </p>
      </div>
    </div>
  )
}
