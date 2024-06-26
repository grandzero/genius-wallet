import React, { createContext, useContext, useState } from 'react'
import { connect } from 'starknetkit'
interface WalletContextType {
  wallet: any // Consider using a more specific type here
  updateWallet: () => void // Adjust the type as needed
}

export const WalletContext = React.createContext<any>(null)

export const useWallet = () => useContext(WalletContext)

export const WalletProvider = ({ children }: any) => {
  const [wallet, setWallet] = useState<any>()

  const updateWallet = async () => {
    const { wallet } = await connect()
    setWallet(wallet)
    console.log('Wallet : ', wallet)
  }

  return (
    <WalletContext.Provider value={{ wallet, updateWallet }}>
      {children}
    </WalletContext.Provider>
  )
}
