import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ArgIcon } from "../icons/ArgIcon";
import { ScanIcon } from "../icons/ScanIcon";

export const Header = () => {
  return (
    <HStack justify={"space-between"} pb={6}>
      <Box
        background={
          " linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
        }
        borderRadius={"12px"}
        w={"40px"}
        h={"40px"}
      />
      <Image src={"/logos/GHOpay.png"} alt="GHO Logo" width={158} height={37} />
      <HStack>
        <ScanIcon />
        <ArgIcon />
      </HStack>
    </HStack>
  );
};
