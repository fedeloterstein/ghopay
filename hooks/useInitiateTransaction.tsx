import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../abis/TwoFactor.json'
import { parseEther } from 'viem';

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0xE4B66F05389557f80C0f8B430C733A76D2945f25',
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