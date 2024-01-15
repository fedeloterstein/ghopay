import { Box, HStack, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { WalletIcon } from "../icons/WalletIcon";
import { AaveIcon } from "../icons/AaveIcon";

export const CardBalance = ({ data }: any) => {
  return (
    <Stack
      borderRadius="30px"
      border={`2px solid var(--Line-gradient, rgba(120, 40, 200, 0.27))`}
      background="linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.14) 0.01%, rgba(255, 255, 255, 0.05) 0.02%, rgba(120, 40, 200, 0.30) 0.03%, rgba(0, 111, 238, 0.30) 100%)"
      boxShadow="0px -66px 54px -70px #FFF inset"
      backdropFilter="blur(50px)"
      minH={"216px"}
    >
      <HStack>
        <HStack>
          <WalletIcon />
          <AaveIcon />
        </HStack>
        <Select>
          <option value="option1">GHO</option>
          <option value="option2">USDC</option>
          <option value="option3">ETH</option>
        </Select>
      </HStack>
      <Stack>
        <Text>BALANCE</Text>
        <HStack>
          <Text>$ {`${data?.formatted} ${data?.symbol}`}</Text>
          <Box>
            <Text>👆 2.3%</Text>
          </Box>
        </HStack>
        <Text>$269.96 ARS</Text>
      </Stack>
      <HStack>
        <Text>0xdbdb…d68e</Text>
        <Box>
          <Text>Copy</Text>
        </Box>
      </HStack>
    </Stack>
  );
};
