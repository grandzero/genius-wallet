'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'
import { useConnectWallet } from '@/lib/hooks/use-connect-wallet'

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function LoginButton({
  text = 'Login with GitHub',
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const { wallet } = useConnectWallet()
  return (
    <>
      {wallet ? <p>Wallet connected</p> : 'Wallet not connected'}
      <Button
        variant="outline"
        onClick={() => {
          setIsLoading(true)
          // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
          signIn('github', { callbackUrl: `/` })
        }}
        disabled={isLoading}
        className={cn(className)}
        {...props}
      >
        {isLoading ? (
          <IconSpinner className="mr-2 animate-spin" />
        ) : showGithubIcon ? (
          <IconGitHub className="mr-2" />
        ) : null}
        {text}
      </Button>
    </>
  )
}
