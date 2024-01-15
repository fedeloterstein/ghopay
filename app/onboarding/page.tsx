"use client";
import React, { useState, useEffect } from "react";
import { Stack, Image, Text as CText } from "@chakra-ui/react";
import { useModal } from "connectkit";
import { useWalletToTwoFactor } from "@/hooks/useWalletToTwoFactor";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TextBody } from "@/components/ui/TextBody";

const Home = () => {
  const content = [
    {
      image: "/images/onboarding1.png",
      title: "Welcome to GHOpay",
      body: "The simplest experience to receive, send or earn GHO payments, without turning your borrowing or lending journey into a nightmare.",
    },
    {
      image: "/images/onboarding2.png",
      title: "Reload, Spend and Earn",
      body: "Turn your stablecoins into GHO Gold and enjoy borrowing rate discounts and be prepared to earn yield on AAVE.",
    },
    {
      image: "/images/onboarding3.png",
      title: "Bye-bye hassle, GM fun",
      body: "The next evolution in crypto payments. Imagine a world where your crypto journey is not just secure, fast, fun, and also rewarding.",
    },
  ];

  const [indiceTexto, setIndiceTexto] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceTexto((prevIndice) => (prevIndice + 1) % content.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const { setOpen } = useModal();
  const { isConnected, address, isConnecting } = useAccount();
  const {walletAddress, isError, isLoading} = useWalletToTwoFactor(address)


  if (isConnected) {
    console.log('conectado!');
    if (walletAddress === '0x0000000000000000000000000000000000000000' || undefined) {
      console.log('no tiene two factr wallet');
      redirect('/onboarding/create-wallet')
      
    } else {
      console.log('dashboard');
      redirect('/wallet')
      
    }
    
  }
  return (
    <Stack align={"center"} gap={4} p={6}>
      <Image src={"/logos/GHOpay.png"} alt="GHO Logo" width={158} height={37} />
      <Image
        src={content[indiceTexto].image}
        alt="GHO Logo"
        width={390}
        height={390}
      />
      <CText
        textAlign={"center"}
        fontSize={"24px"}
        fontWeight={700}
        bgClip="text"
        bgGradient={
          "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
        }
      >
        {content[indiceTexto].title}
      </CText>
      <TextBody
      >
        {content[indiceTexto].body}
      </TextBody>
      <Button onClick={() => setOpen(true)}
      >Connect Wallet</Button>
    </Stack>
  );
};

export default Home;
