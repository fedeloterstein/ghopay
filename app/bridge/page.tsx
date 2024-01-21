"use client";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { BridgeIconV2 } from "@/components/icons/BrideIconV2";
import { BridgeIcon } from "@/components/icons/BridgeIcon";
import { ScanIcon } from "@/components/icons/ScanIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { TransferIconV2 } from "@/components/icons/TransferIconv2";
import { Button } from "@/components/ui/Button";
import { useCreateBridge } from "@/hooks/useCreateBridge";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

import { useState } from "react";

export default function BridgePage() {
  const [address, setaddress] = useState<string>("");

  const { write, isLoading, data, isSuccess } = useCreateBridge();

  if (data?.hash) {
    redirect("/bridge/success");
  }

  return (
    <Stack>
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
          <HStack>
            <Stack
              w={"27px"}
              h={"27px"}
              background={"white"}
              borderRadius={"8px"}
              justify={"center"}
              align={"center"}
            >
              <BridgeIconV2 />
            </Stack>
            <Heading color={"white"} fontSize={"14px"} fontWeight={400}>
              Bridge
            </Heading>
          </HStack>
          <Box />
        </HStack>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            onChange={(e) => setaddress(e.target.value)}
            background={"white"}
            placeholder="Search token to bridge"
            border={"2px solid rgba(120, 40, 200, 0.27)"}
            borderRadius={"12px"}
          />
        </InputGroup>
      </Stack>
      <Stack m={4} gap={8} >
        <Stack
          p={4}
          background={"white"}
          borderRadius={"14px"}
          shadow={
            "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
          }
        >
          <HStack justifyContent={"space-between"}>
            <HStack>
              <Text fontSize={"12px"} fontWeight={700}>
                FROM
              </Text>
              <Text>Ethereum</Text>
            </HStack>
            <Text>$ 0</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text>Available:</Text>
            <Text> $ 12</Text>
          </HStack>
        </Stack>

        <Stack>
          <BridgeIcon />
        </Stack>
        <Stack
          p={4}
          background={"white"}
          borderRadius={"14px"}
          shadow={
            "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
          }
        >
          <Stack>
            <HStack justifyContent={"space-between"}>
            <HStack >
                <Text fontSize={"12px"} fontWeight={700}>
                  TO
                </Text>
                <Text>Polygon</Text>
              </HStack>
              <Text>$ 0</Text>
            </HStack>
          </Stack>
        </Stack>
        <Stack
          p={4}
          background={"white"}
          borderRadius={"14px"}
          shadow={
            "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
          }
        >
          <HStack>
            <Text>Estimed time: </Text>
            <Text>9 min</Text>
          </HStack>
          <HStack>
            <Text>Slipage Tolreance: </Text>
            <Text>2 %</Text>
          </HStack>
          <HStack>
            <Text>Fee: </Text>
            <Text>0.000012 LINK</Text>
          </HStack>
        </Stack>
        <Button width={"auto"} onClick={write}>
          Approve
        </Button>
      </Stack>
    </Stack>
  );
}
