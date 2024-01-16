import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SavingsIcon } from "../icons/SavingsIcons";
import Link from "next/link";

export const BorrowCard = () => {
  return (
    <HStack
      minH={"100px"}
      borderRadius={"6px"}
      background={"white"}
      shadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      p={3}
      justify={'space-between'}
      mt={5}
    >
      <SavingsIcon />
      <Stack>
        <Text maxW={'200px'} fontSize={'14px'} fontWeight={600}>Enjoy borrowing rate discounts on GHO APY 4.49-6.42%</Text>
        <Text
          as={Link}
          href={"/borrow"}
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={700}
          textAlign={'end'}
        >
          Invest Now
        </Text>
      </Stack>
    </HStack>
  );
};
