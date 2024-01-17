import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useOwner = (owner: number) => {
    const { data, isError, isLoading } = useContractRead({
        address: '0xE4B66F05389557f80C0f8B430C733A76D2945f25',
        abi: abi.abi,
        functionName: `owner${owner}`,
      })
      const address = data;
      return { address, isError, isLoading }
}