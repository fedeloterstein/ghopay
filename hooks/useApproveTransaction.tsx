import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../abis/TwoFactor.json";
import { Address, parseEther } from "viem";
import { useWalletToTwoFactor } from "./useWalletToTwoFactor";

interface Props {
  indextx: number;
}
export const useApproveTransaction = ({ indextx }: Props) => {
  const { address: waddress } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(waddress);

  const { config } = usePrepareContractWrite({
    address: walletAddress as Address,
    abi: abi.abi,
    functionName: "approveTransaction",
    args: [indextx],
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      console.log(data);
    },
  });
  const { write } = useContractWrite(config);
  return { write };
};
