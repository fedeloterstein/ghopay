'use client'
import { useInitiateTransaction } from '@/hooks/useInitiateTransaction';
import { useWalletToTwoFactor } from '@/hooks/useWalletToTwoFactor';
import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

import { useState } from 'react';
import { useAccount } from 'wagmi';

export const TransactionForm = () => {
    const [address, setaddress] = useState<string>('')
    const [amount, setamount] = useState<string>('')

    const { address: waddress } = useAccount();
    const { walletAddress } = useWalletToTwoFactor(waddress);
    const { write } = useInitiateTransaction({address, amount})
    
    const Send = () => {
      write?.()
      setaddress('')
      setamount('')
    }
   
  return (
    <HStack p={5}>
    <Input placeholder="Address To" w={'70%'} onChange={(e) => setaddress(e.target.value)}/>
    <Input placeholder="Amount" w={'20%'} onChange={(e) => setamount(e.target.value)} />
    <Button w={'10%'}  onClick={() => Send()}>
      Add 💰
    </Button>
  </HStack>
  )
}
