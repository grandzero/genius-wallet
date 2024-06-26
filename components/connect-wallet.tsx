'use client'
import { connect } from 'starknetkit'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { useWallet } from '@/lib/contexts/wallet-context'

const ConnectWalletButton = () => {
  const { updateWallet } = useWallet()
  return (
    <button onClick={updateWallet} className={cn(buttonVariants())}>
      <span className="hidden sm:block">Connect Wallet</span>
    </button>
  )
}

export default ConnectWalletButton
