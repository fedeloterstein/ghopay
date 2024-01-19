import { Box, HStack, Select, Stack, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { WalletIcon } from "../icons/WalletIcon";
import { AaveIcon } from "../icons/AaveIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { convertFormat } from "@/utils/convertFormat";
import { copyText } from "@/utils/copyText";

export const CardBalance = ({ data, walletAddress }: any) => {
  const toast = useToast();

  const copy = () => {
    copyText(walletAddress);
    toast({
      title: "Address copy.",
      description: `${walletAddress}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Stack
      borderRadius="30px"
      border={`2px solid var(--Line-gradient, rgba(120, 40, 200, 0.27))`}
      background="linear-gradient(75deg, #DABFD7 1.77%, #B295EB 38.13%, #9BBBDF 73.99%, #3086F0 102.77%)"
      boxShadow="0px -66px 54px -70px #FFF inset"
      backdropFilter="blur(50px)"
      minH={"216px"}
      p={4}
      shadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
    >
      <HStack justify={"space-between"}>
        <HStack gap={2}>
          <WalletIcon />
          <AaveIcon />
        </HStack>
        <Select
          background={"white"}
          height={"28px"}
          borderRadius={"20px"}
          minW={"65px"}
          w={"auto"}
          fontSize={"10px"}
          fontWeight={500}
        >
          <option value="option1">GHO</option>
          <option value="option2">USDC</option>
          <option value="option3">ETH</option>
        </Select>
      </HStack>
      <Stack>
        <Text fontSize={"12px"} fontWeight={400} color={"white"}>
          BALANCE
        </Text>
        <HStack>
          <Text fontSize={"28px"} fontWeight={700} color={"white"}>
            $ {`${data?.formatted} ${data?.symbol}`}
          </Text>
          <Box
            background={"rgba(255, 255, 255, 0.40)"}
            borderRadius={"8px"}
            padding={1}
          >
            <Text fontSize={"12px"} fontWeight={700} color={"white"}>
              👆 2.3%
            </Text>
          </Box>
        </HStack>
        <Text
          fontSize={"20px"}
          fontWeight={400}
          opacity={"0.5"}
          color={"white"}
        >
          $ {data?.formatted * 1100} ARS
        </Text>
      </Stack>
      <HStack justify={"space-between"}>
        <Text fontSize={"14px"} fontWeight={600} color={"white"}>
          {convertFormat(walletAddress)}
        </Text>
        <HStack
          background={"white"}
          borderRadius={"9px"}
          p={"4px 12px 4px 7px"}
          onClick={copy}
          cursor={"pointer"}
        >
          <CopyIcon />
          <Text
            fontSize={"11px"}
            fontWeight={600}
            bgClip="text"
            bgGradient={
              "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
            }
          >
            Copy
          </Text>
        </HStack>
      </HStack>
    </Stack>
  );
};
