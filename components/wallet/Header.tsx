import { Avatar, HStack, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <HStack justify={'space-between'} >
      <Avatar />
      <Image src={"/logos/GHOpay.png"} alt="GHO Logo" width={158} height={37} />
      <IconButton aria-label={""} />
    </HStack>
  );
};
