import { useContractRead } from 'wagmi'
import abi from '../abis/TwoFactor.json'

export const useOwner = (owner: number) => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x632cA99e250FB786dD689840B2d82117D4A34F54',
        abi: abi.abi,
        functionName: `owner${owner}`,
      })
      const address = data;
      return { address, isError, isLoading }
}