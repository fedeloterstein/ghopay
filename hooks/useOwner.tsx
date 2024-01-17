import { Address, useAccount, useContractRead } from "wagmi";
import abi from "../abis/TwoFactor.json";
import { useWalletToTwoFactor } from "./useWalletToTwoFactor";

export const useOwner = (owner: number) => {
  const { address: waddress } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(waddress);

  const { data, isError, isLoading } = useContractRead({
    address: walletAddress as Address,
    abi: abi.abi,
    functionName: `owner${owner}`,
  });
  const address = data;
  return { address, isError, isLoading };
};
