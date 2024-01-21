import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../abis/TokenTransferor.json";
import { parseEther } from "viem";

export const useCreateBridge = () => {
  const { config } = usePrepareContractWrite({
    address: "0xb7f20CF68C4efc734B43e836308d4F20B6dc22f8",
    abi: abi.abi,
    functionName: "transferTokensPayLINK",
    args: [
      "12532609583862916517",
      "0x4F10485840d3f6b4553c69A2CD93CCBE6832497D",
      "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      parseEther("0.001"),
    ],
  });
  const { write, isLoading, data, isSuccess } = useContractWrite(config);
  return { write, isLoading, data, isSuccess };
};
