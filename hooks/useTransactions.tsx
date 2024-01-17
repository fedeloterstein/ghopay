import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useTransactions = () => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x04126A5CCC8dc1a2866a16c33169500881A6ac2a',
        abi: abi.abi,
        functionName: 'getTransactions',
      })
      const transactions = data as [];
    
    
      return { transactions, isError, isLoading }
}

