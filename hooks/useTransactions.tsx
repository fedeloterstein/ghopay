import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useTransactions = () => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x2DAe9B2E814FeD63274D75A158c27eEb40BBd038',
        abi: abi.abi,
        functionName: 'getTransactions',
      })
      const transactions = data as [];
    
    
      return { transactions, isError, isLoading }
}