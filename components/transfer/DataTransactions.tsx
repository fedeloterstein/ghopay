"use client";
import {
  Heading,
  Button,
  Badge,
  HStack,
  IconButton,
  Stack,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { useAccount } from "wagmi";
import { useState } from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { useOwner } from "@/hooks/useOwner";
import { formatEther } from "viem";
import { useApproveTransaction } from "@/hooks/useApproveTransaction";
import { useContractEvents } from "@/hooks/useContractEvent";
import { TransferIcon } from "../icons/TransferIcon";
import { GHOIcon } from "../icons/GHOIcon";
import { convertFormat } from "@/utils/convertFormat";
import Link from "next/link";
import { SearchIcon } from "../icons/SearchIcon";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

export const DataTransactions = () => {
  return (
    <Stack>
      <Header />
      <Stack padding={4} gap={4}>
        <Text fontSize={"14px"} fontWeight={600}>
          January 2024
        </Text>
        <Stack
          padding={4}
          background={"white"}
          borderRadius={"14px"}
          shadow={
            "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
          }
        >
          <TransactionHistoryList />
        </Stack>
      </Stack>
    </Stack>
  );
};

export const TransactionHistoryList = ({ filter }: any) => {
  console.log(filter);

  const transactions = useTransactions();
  const { address } = useAccount();
  const ownerOne = useOwner(1);
  const ownerTwo = useOwner(2);
  const isOwnerOne = address === ownerOne?.address;
  const isOwnerTwo = address === ownerTwo?.address;
  const [indextx, setindextx] = useState<number>(0);

  const { write } = useApproveTransaction({ indextx });

  const Send = (index: number) => {
    setindextx(index);
    write?.();
  };

  useContractEvents("NewWithdraw", "New Withdraw");

  if (!transactions.transactions) {
    return null;
  }

  if (filter) {
    return (
      <>
        {transactions.transactions &&
          transactions.transactions
            .slice(-4)
            .map((tx: any, index) => (
              <TransactionHistoryItem
                tx={tx}
                Send={Send}
                index={index}
                isOwnerTwo={isOwnerTwo}
                isOwnerOne={isOwnerOne}
              />
            ))}
      </>
    );
  }
  return (
    <>
      {transactions.transactions &&
        transactions.transactions.map((tx: any, index) => (
          <TransactionHistoryItem
            tx={tx}
            Send={Send}
            index={index}
            isOwnerTwo={isOwnerTwo}
            isOwnerOne={isOwnerOne}
          />
        ))}
    </>
  );
};
const TransactionHistoryItem = ({
  tx,
  Send,
  index,
  isOwnerTwo,
  isOwnerOne,
}: any) => {
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
              {formatEther(tx.amount)} GHO
            </Text>
          </HStack>
          <Text fontSize={"10px"} fontWeight={400}>
            {convertFormat(tx.to)}
          </Text>
        </Stack>
      </HStack>
      {tx.signedByOwnerOne === false ? (
        <Button
          onClick={() => Send(index)}
          variant={"ghost"}
          colorScheme={"red"}
          isDisabled={!isOwnerOne}
        >
          Pending
        </Button>
      ) : (
        <Badge colorScheme={"green"}>Approve</Badge>
      )}
      {tx.signedByOwnerTwo === false ? (
        <Button
          onClick={() => Send(index)}
          variant={"ghost"}
          colorScheme={"red"}
          isDisabled={!isOwnerTwo}
        >
          Pending
        </Button>
      ) : (
        <Badge colorScheme={"green"}>Approve</Badge>
      )}
    </HStack>
  );
};

const Header = () => {
  return (
    <Stack
      padding={4}
      minH={"138px"}
      w={"100%"}
      background={
        "linear-gradient(75deg, #DABFD7 1.77%, #B295EB 38.13%, #9BBBDF 73.99%, #3086F0 102.77%)"
      }
      shadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
    >
      <HStack justify={"space-between"}>
        <IconButton
          aria-label=""
          icon={<ArrowLeftIcon />}
          variant={"unstyle"}
          as={Link}
          href={"/wallet"}
        />
        <Heading color={"white"} fontSize={"14px"} fontWeight={600}>
          💰 Transactions
        </Heading>
        <Box />
      </HStack>

      <InputGroup>
        <Input
          background={"white"}
          placeholder="Search"
          border={"2px solid rgba(120, 40, 200, 0.27)"}
          borderRadius={"12px"}
        />
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
      </InputGroup>
    </Stack>
  );
};
