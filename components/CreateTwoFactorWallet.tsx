import React from "react";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../abis/TwoFactorFactory.json";
import { contracts } from "@/constants/contracts";

export const CreateTwoFactorWallet = ({ owner1, owner2 }: any) => {
  console.log(owner1, owner2);

  const { config } = usePrepareContractWrite({
    address: contracts.twoFactorFactory as Address,
    abi: abi.abi,
    functionName: "createTwoFactor",
    args: [owner1, owner2],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(data, isLoading, isSuccess);

  return (
    <div>
      <h1>CreateTwoFactorWallet</h1>
      {isLoading ? (
        <p>Creado wallet....</p>
      ) : (
        <button onClick={write}>Crear Wallet</button>
      )}
    </div>
  );
};
