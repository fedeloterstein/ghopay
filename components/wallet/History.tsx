import { Button, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ReceiveIcon } from "../icons/ReceiveIcon";
import { GHOIcon } from "../icons/GHOIcon";
import { TransferIcon } from "../icons/TransferIcon";
import { TransactionHistoryList } from "../transfer/DataTransactions";

export const History = () => {
  return (
    <Stack>
      <Text fontSize={"14px"} fontWeight={600} pb={5}>
        History
      </Text>
      <Stack
        minH={"238px"}
        borderRadius={"14px"}
        background={"white"}
        shadow={
          " 0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
        }
        p={4}
      >
        <Stack gap={5}>
          <TransactionHistoryList filter={true}/>
        </Stack>
        <Text
          textAlign={"center"}
          as={Link}
          href={"/transfer"}
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={700}
          m={1}
        >
          See more transactions
        </Text>
      </Stack>
    </Stack>
  );
};

const TransactionHistory = () => {
  return (
    <HStack justify={"space-between"}>
      <HStack>
        <IconButton
          aria-label={""}
          icon={<TransferIcon />}
          variant={"unstyle"}
          w={"44px"}
          h={"44px"}
          background={"rgba(172, 172, 176, 0.24)"}
        />
        <Stack gap={1}>
          <HStack>
            <GHOIcon />
            <Text fontSize={"12px"} fontWeight={700}>
              1 GHO
            </Text>
          </HStack>
          <Text fontSize={"10px"} fontWeight={400}>
            0xdbdb…d68e
          </Text>
        </Stack>
      </HStack>
      <Button colorScheme="yellow" isDisabled>
        Pending
      </Button>
    </HStack>
  );
};
