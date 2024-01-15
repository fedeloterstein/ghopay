"use client";
import { InputWalletOwner } from "@/components/InputWalletOwner";
import { InputWalletSecurity } from "@/components/InputWalletSecurity";
import { Button } from "@/components/ui/Button";
import { TextBody } from "@/components/ui/TextBody";
import { TextTitle } from "@/components/ui/TextTitle";
import { useCreateTwoFactorWallet } from "@/hooks/useCreateTwoFactorWallet";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Address, useAccount } from "wagmi";

export default function CreateWalletPage() {
  const [inputValue, setInputValue] = useState("");
  const { address, isConnecting } = useAccount();
  const { isLoading, isSuccess, write } = useCreateTwoFactorWallet(
    address as Address,
    inputValue as Address
  );

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  if (isConnecting) return <div>Connecting...</div>;

  if (isSuccess) {
    redirect("/wallet");
  }

  return (
    <Stack align={"center"} pt={8}>
      <Image
        alt="locker image"
        src={"/images/locker.png"}
        height={183}
        width={183}
      />
      <HStack mb={4}>
        <TextTitle>Create Multi-Signature</TextTitle>
        <Text fontSize={"24px"} fontWeight={700}>
          🔐
        </Text>
      </HStack>
      <TextBody maxW={"327px"} mb={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </TextBody>
      <InputWalletOwner address={address} />
      <InputWalletSecurity handleInputChange={handleInputChange} />
      <Button
        marginTop={"80px"}
        isDisabled={inputValue === ""}
        isLoading={isLoading}
        onClick={write}
      >
        Sign Now
      </Button>
    </Stack>
  );
}
