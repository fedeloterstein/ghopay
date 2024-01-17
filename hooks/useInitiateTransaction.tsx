import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../abis/TwoFactor.json'
import { parseEther } from 'viem';

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0x2DAe9B2E814FeD63274D75A158c27eEb40BBd038',
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