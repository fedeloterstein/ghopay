import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useTransactions = () => {
    const { data, isError, isLoading } = useContractRead({
        address: '0xE4B66F05389557f80C0f8B430C733A76D2945f25',
        abi: abi.abi,
        functionName: 'getTransactions',
      })
      const transactions = data as [];
    
    
      return { transactions, isError, isLoading }
}

