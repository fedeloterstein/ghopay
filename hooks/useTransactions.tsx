import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useTransactions = () => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x632cA99e250FB786dD689840B2d82117D4A34F54',
        abi: abi.abi,
        functionName: 'getTransactions',
      })
      const transactions = data as [];
    
    
      return { transactions, isError, isLoading }
}