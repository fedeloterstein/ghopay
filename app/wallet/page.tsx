"use client";

import { useWalletToTwoFactor } from "@/hooks/useWalletToTwoFactor";
import { useModal } from "connectkit";
import { Address, useAccount, useBalance, useDisconnect } from "wagmi";
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

  if (isConnecting || isLoading || walletAddress === '0x0000000000000000000000000000000000000000') return <div>Connecting...</div>;

  return (
    <div className="p-20">
      {!isConnected && (
        <button onClick={() => setOpen(true)}>Open Modal</button>
      )}
      {isConnected && (
        <div>
          <p>Connected Wallet: {address}</p>
          {isSuccess && (
            <div>
              <p>{`${data?.symbol}:${data?.formatted}`}</p>
              <p>Contract TwoFactor: {walletAddress as String}</p>
            </div>
          )}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
    </div>
  );
}
