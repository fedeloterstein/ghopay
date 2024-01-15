import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const History = () => {
  return (
    <Stack>
      <Text>History</Text>
      <Stack>
        <TransactionHistory />
        <TransactionHistory />
        <TransactionHistory />
      </Stack>
      <Text as={Link} href={'/history'}>See more transactions</Text>
    </Stack>
  );
};

const TransactionHistory = () => {
  return (
    <HStack>
      <IconButton aria-label={""} />
      <Stack>
        <HStack>
          <Text>🤡</Text>
          <Text>$1 ETH</Text>
        </HStack>
        <Text>17 Jan 2024</Text>
      </Stack>
      <Stack>
        <Text>+$93.23 GHO</Text>
        <Text>+$269.96 ARS</Text>
      </Stack>
    </HStack>
  );
};
