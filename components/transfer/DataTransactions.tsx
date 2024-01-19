"use client";
import {
  Center,
  Heading,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
  Tfoot,
} from "@chakra-ui/react";
import React from "react";

import { useAccount } from "wagmi";
import { useState } from "react";
import { TransactionForm } from "./transferForm";
import { useTransactions } from "@/hooks/useTransactions";
import { useOwner } from "@/hooks/useOwner";
import { formatEther } from "viem";
import { useApproveTransaction } from "@/hooks/useApproveTransaction";
import { useContractEvents } from "@/hooks/useContractEvent";

export const DataTransactions = () => {
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

  return (
    <>
      <Center p={5}>
        <Heading as="h2" size={"lg"}>
          Transactions 💸
        </Heading>
      </Center>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Built on ETHGlobal 🚀 Hack FEVM</TableCaption>
          <Thead>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.transactions &&
              transactions.transactions.map((tx: any, index) => (
                <Tr key={index}>
                  <>{console.log(tx)}</>
                  <Td>{tx.to}</Td>
                  <Td>{formatEther(tx.amount)} tFIL</Td>
                  <Td>
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
                  </Td>
                  <Td>
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
                  </Td>
                  <Td>
                    {tx.success ? (
                      <Badge colorScheme={"green"}>Success</Badge>
                    ) : (
                      <Badge colorScheme={"yellow"}>Programmed</Badge>
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
              <Th>Status</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
