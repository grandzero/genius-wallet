import { useState } from 'react'
import { connect } from 'starknetkit'
export const useConnectWallet = (): {
  wallet: any
  connectWallet: any
  getWallet: any
} => {
  const [wallet, setWallet] = useState<any>()

  const connectWallet = async () => {
    console.log('Entered')
    const { wallet } = await connect()
    setWallet(wallet)
    console.log('Wallet : ', wallet)
  }

  const getWallet = () => {
    return wallet
  }
  return { wallet, connectWallet, getWallet }
}
