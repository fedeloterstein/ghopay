"use client";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import abi from "../abis/TwoFactorFactory.json";
import { contracts } from "@/constants/contracts";

export const useCreateTwoFactorWallet = (owner1: string, owner2: string) => {
console.log(owner1, owner2);

  const { config } = usePrepareContractWrite({
    address: contracts.twoFactorFactory as Address,
    abi: abi.abi,
    functionName: "createTwoFactor",
    args: [owner1, owner2],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return { data, isLoading, isSuccess, write };
};
