"use client";
import { useWalletToTwoFactor } from "@/hooks/useWalletToTwoFactor";
import { useModal } from "connectkit";
import { Address, useAccount, useBalance, useDisconnect } from "wagmi";
import { redirect } from "next/navigation";
import { Header } from "@/components/wallet/Header";
import { Stack } from "@chakra-ui/react";
import { CardBalance } from "@/components/wallet/CardBalance";
import { ButtonsGroup } from "@/components/wallet/ButtonsGroup";
import { History } from "@/components/wallet/History";
import { BorrowCard } from "@/components/wallet/BorrowCard";
export default function WalletPage() {
  const { isConnected, address, isConnecting } = useAccount();
  const { setOpen } = useModal();
  const { disconnect } = useDisconnect();

  const { walletAddress, isLoading } = useWalletToTwoFactor(address);
  const { data, isSuccess } = useBalance({
    address: walletAddress as Address,
    token: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    formatUnits: "ether",
  });

  if (
    isConnecting ||
    isLoading ||
    walletAddress === "0x0000000000000000000000000000000000000000"
  )
    return <div>Connecting...</div>;

  if (!isConnected) {
    redirect("/");
  }

  return (
    <Stack padding={4}>
      <Header />
      <CardBalance data={data} walletAddress={walletAddress} />
      <ButtonsGroup />
      <History />
      <BorrowCard />
    </Stack>
  );
}

/**
 * 
 *       <div>
        <p>Connected Wallet: {address}</p>
        {isSuccess && (
          <div>
            <p>{`${data?.symbol}:${data?.formatted}`}</p>
            <p>Contract TwoFactor: {walletAddress as String}</p>
          </div>
        )}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
 */
