'use client'
import { Button } from "@/components/ui/Button";
import { TextBody } from "@/components/ui/TextBody";
import { TextTitle } from "@/components/ui/TextTitle";
import { useCreateTwoFactorWallet } from "@/hooks/useCreateTwoFactorWallet";
import { convertFormat } from "@/utils/convertFormat";
import { Box, HStack, Input, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Address, useAccount } from "wagmi";

export default function CreateWalletPage() {
  const [inputValue, setInputValue] = useState('');
  const { isConnected, address, isConnecting } = useAccount();
  const { data, isLoading, isSuccess, write } = useCreateTwoFactorWallet(address as Address, inputValue as Address)

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  if (isConnecting) return <div>Connecting...</div>;

  if (isSuccess) {
    redirect('/wallet')
  }
  return (
    <Stack align={"center"}>
      <Image
        alt="locker image"
        src={"/images/locker.png"}
        height={183}
        width={183}
      />
      <HStack>
        <TextTitle>Create Multi-Signature</TextTitle>
        <Text fontSize={"24px"} fontWeight={700}>
          🔐
        </Text>
      </HStack>
      <TextBody maxW={"327px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </TextBody>
      <HStack>
        <Box
          display={"flex"}
          w={8}
          h={8}
          padding={2}
          justifyContent={"center"}
          alignItems={"center"}
          background={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          borderRadius={"12px"}
        >
          <Text color={"white"} fontSize={"12px"} fontWeight={400}>
            A1
          </Text>
        </Box>
        <HStack
          borderRadius={"12px"}
          border={"2px solid"}
          borderColor={"#E4E4E7"}
          minW={"274px"}
          h={"56px"}
          p={2}
        >
          <Stack>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              bgClip="text"
              bgGradient={
                "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
              }
            >
              Wallet Address Owner
            </Text>
            <Input
              variant={"unstyled"}
              placeholder={convertFormat(
                address as Address
              )}
              disabled
            />
          </Stack>
          <Text>✅</Text>
        </HStack>
      </HStack>
      <HStack>
        <Box
          display={"flex"}
          w={8}
          h={8}
          padding={2}
          justifyContent={"center"}
          alignItems={"center"}
          background={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          borderRadius={"12px"}
        >
          <Text color={"white"} fontSize={"12px"} fontWeight={400}>
            A2
          </Text>
        </Box>
        <HStack
          borderRadius={"12px"}
          border={"2px solid"}
          borderColor={"#E4E4E7"}
          minW={"274px"}
          h={"56px"}
          p={2}
        >
          <Stack>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              bgClip="text"
              bgGradient={
                "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
              }
            >
              Wallet 2 Security
            </Text>
            <Input variant={"unstyled"} placeholder={"0xdbdb…d68e"}     onChange={handleInputChange} />
          </Stack>
        </HStack>
      </HStack>
      <Button marginTop={'80px'} isDisabled={inputValue === ''} isLoading={isLoading} onClick={write}>Create</Button>
    </Stack>
  );
}
