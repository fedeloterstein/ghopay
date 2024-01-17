"use client";
import React, { useState, useEffect } from "react";
import { Stack, Image, Text as CText, HStack, Text } from "@chakra-ui/react";
import { useModal } from "connectkit";
import { useWalletToTwoFactor } from "@/hooks/useWalletToTwoFactor";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TextBody } from "@/components/ui/TextBody";
import { contentOnboarding } from "@/constants/onboardingTexts";
import { TextTitle } from "@/components/ui/TextTitle";

const Home = () => {
  const [indexText, setindexText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setindexText((prevIndex) => (prevIndex + 1) % contentOnboarding.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const { setOpen } = useModal();
  const { address } = useAccount();
  const { walletAddress } = useWalletToTwoFactor(address);

  if (walletAddress) {
    console.log("conectado!");
    if (walletAddress === "0x0000000000000000000000000000000000000000") {
      redirect("/create-wallet");
    } else {
      redirect("/wallet");
    }
  }
  return (
    <Stack align={"center"} gap={4} p={6} pt={9}>
      <Image src={"/logos/GHOpay.png"} alt="GHO Logo" width={158} height={37} />
      <Image
        src={contentOnboarding[indexText].image}
        alt="GHO Logo"
        width={contentOnboarding[indexText].width}
        height={contentOnboarding[indexText].height}
      />
      <div>
        <HStack mb={4} justify={"center"}>
          <TextTitle> {contentOnboarding[indexText].title}</TextTitle>
          <Text fontSize={"24px"} fontWeight={700}>
            {contentOnboarding[indexText].icon}
          </Text>
        </HStack>
        <TextBody maxW={"327px"}>{contentOnboarding[indexText].body}</TextBody>
      </div>
      <Button mt={"63px"} onClick={() => setOpen(true)}>
        Connect Wallet
      </Button>
    </Stack>
  );
};

export default Home;
