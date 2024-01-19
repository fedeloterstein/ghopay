import React from "react";
import { Address, useAccount, useContractEvent } from "wagmi";
import abi from "../abis/TwoFactor.json";
import { useWalletToTwoFactor } from "./useWalletToTwoFactor";
import { useToast } from "@chakra-ui/react";

export const useContractEvents = (name: string, message: string) => {
  const { address: waddress } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(waddress);
  const toast = useToast();
  return useContractEvent({
    address: walletAddress as Address,
    abi: abi.abi,
    eventName: name,
    listener(log) {
      console.log("Nuevo evento: ", name, log);
      toast({
        title: message,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    },
  });
};
