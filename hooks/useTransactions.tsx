import { Address, useAccount, useContractRead } from "wagmi";
import abi from "../abis/TwoFactor.json";
import { useWalletToTwoFactor } from "./useWalletToTwoFactor";

export const useTransactions = () => {
  const { address: waddress } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(waddress);

  const { data, isError, isLoading } = useContractRead({
    address: walletAddress as Address,
    abi: abi.abi,
    functionName: "getTransactions",
  });
  const transactions = data as [];

  return { transactions, isError, isLoading };
};
