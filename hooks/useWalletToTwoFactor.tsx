"use client";
import { Address, useContractRead } from "wagmi";
import abi from "../abis/TwoFactorFactory.json";
import { contracts } from "@/constants/contracts";

export const useWalletToTwoFactor = (address: any) => {
  const { data, isError, isLoading } = useContractRead({
    address: contracts.twoFactorFactory as Address,
    abi: abi.abi,
    functionName: "walletToTwoFactor",
    args: [address],
  });

  const walletAddress = data;

  return { walletAddress, isError, isLoading };
};
