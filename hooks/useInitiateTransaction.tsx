import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../abis/TwoFactor.json'
import { Address, parseEther } from 'viem';
import { useWalletToTwoFactor } from './useWalletToTwoFactor';

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { address: waddress } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(waddress);

  const { config } = usePrepareContractWrite({
    address: walletAddress as Address,
    abi: abi.abi,
    functionName: 'initiateTransaction',
    args: [
      address,
      parseEther(amount || '1'),
    ],
  })
  const { write, isLoading } = useContractWrite(config)
  return { write, isLoading }
}