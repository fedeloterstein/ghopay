import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ReceiveIcon } from "../icons/ReceiveIcon";
import { TransferIcon } from "../icons/TransferIcon";
import { BridgeIcon } from "../icons/BridgeIcon";
import { RocketIcon } from "../icons/RocketIcon";
import Link from "next/link";

const buttonsContent = [
  {
    title: "Receive",
    icon: <ReceiveIcon />,
    url: "/receive",
  },
  {
    title: "Transfer",
    icon: <TransferIcon />,
    url: "/transfer",
  },
  {
    title: "Bridge",
    icon: <BridgeIcon />,
    url: "/bridge",
  },
  {
    title: "Borrow",
    icon: <RocketIcon />,
    url: "/borrow",
  },
];
export const ButtonsGroup = () => {
  return (
    <HStack>
      {buttonsContent.map((button: any, index: number) => (
        <Stack key={index} as={Link} href={button.url}>
          <IconButton aria-label={""} icon={button.icon} />
          <Text>{button.title}</Text>
        </Stack>
      ))}
    </HStack>
  );
};
