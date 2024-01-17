import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../abis/TwoFactor.json'
import { parseEther } from 'viem';

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0x04126A5CCC8dc1a2866a16c33169500881A6ac2a',
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