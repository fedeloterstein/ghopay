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
    url: "/transfer/new",
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
    <HStack justify={"space-between"} p={6}>
      {buttonsContent.map((button: any, index: number) => (
        <Stack key={index} as={Link} href={button.url} align={"center"}>
          <IconButton
            aria-label={""}
            icon={button.icon}
            variant={"unstyle"}
            w={"44px"}
            h={"44px"}
            background={
              button.title === "Borrow"
                ? "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
                : "rgba(172, 172, 176, 0.24)"
            }
          />
          <Text fontSize={'10px'} fontWeight={500} color={'rgba(30, 30, 32, 0.8)'}>{button.title}</Text>
        </Stack>
      ))}
    </HStack>
  );
};
