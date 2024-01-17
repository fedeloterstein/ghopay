"use client";
import { useContractEvents } from "@/hooks/useContractEvent";
import { useInitiateTransaction } from "@/hooks/useInitiateTransaction";
import { HStack, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const TransactionForm = () => {
  const [address, setaddress] = useState<string>("");
  const [amount, setamount] = useState<string>("");

  const { write } = useInitiateTransaction({ address, amount });

  const Send = () => {
    write?.();
    setaddress("");
    setamount("");
  };

  useContractEvents("NewInitiateTransaction", 'New Initiate Transaction');

  return (
    <HStack p={5}>
      <Input
        placeholder="Address To"
        w={"70%"}
        onChange={(e) => setaddress(e.target.value)}
      />
      <Input
        placeholder="Amount"
        w={"20%"}
        onChange={(e) => setamount(e.target.value)}
      />
      <Button w={"10%"} onClick={() => Send()}>
        Add 💰
      </Button>
    </HStack>
  );
};
