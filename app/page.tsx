"use client";

import { useModal } from "connectkit";
import { useAccount, useBalance, useDisconnect } from "wagmi";

export default function Home() {
  const { isConnected, address, isConnecting } = useAccount();
  const { setOpen } = useModal();
  const { disconnect } = useDisconnect();

  const { data, isSuccess } = useBalance({
    address: "0x4F10485840d3f6b4553c69A2CD93CCBE6832497D",
    token: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    formatUnits: "ether",
  });
  console.log(data);

  if (isConnecting) return <div>Connecting...</div>;

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
            </div>
          )}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
    </div>
  );
}
