import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../abis/TwoFactor.json'
import { parseEther } from 'viem';

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0x632cA99e250FB786dD689840B2d82117D4A34F54',
    abi: abi.abi,
    functionName: 'initiateTransaction',
    args: [
      address,
      parseEther(amount || '1'),
    ],
  })
  const { write } = useContractWrite(config)
  return { write }
}