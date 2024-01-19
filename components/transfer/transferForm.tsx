"use client";
import { useContractEvents } from "@/hooks/useContractEvent";
import { useInitiateTransaction } from "@/hooks/useInitiateTransaction";
import React from "react";
import { useState } from "react";
import {
  Box,
  Button as ButtonC,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { Button } from "@/components/ui/Button";
import { TransferIconV2 } from "../icons/TransferIconv2";
import { ScanIcon } from "../icons/ScanIcon";

export const TransactionForm = () => {
  const [address, setaddress] = useState<string>("");
  const [amount, setamount] = useState<string>("");
  const [loading, setloading] = useState(false);

  const { write } = useInitiateTransaction({ address, amount });

  const Send = () => {
    setloading(true);
    write?.();
    setaddress("");
    setamount("");
  };

  useContractEvents("NewInitiateTransaction", "New Initiate Transaction");

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
              <TransferIconV2 />
            </Stack>
            <Heading color={"white"} fontSize={"14px"} fontWeight={400}>
              Transfer
            </Heading>
          </HStack>
          <Box />
        </HStack>
        <InputGroup>
          <Input onChange={(e) => setaddress(e.target.value)} background={'white'} placeholder="Address to send" border={'2px solid rgba(120, 40, 200, 0.27)'} borderRadius={'12px'}/>
          <InputRightElement>
            <ScanIcon />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Stack
        padding={4}
        margin={4}
        borderRadius={"14px"}
        align={"center"}
        background={"white"}
        shadow={
          "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
        }
      >
        <Select
          background={"white"}
          height={"28px"}
          borderRadius={"20px"}
          minW={"65px"}
          w={"auto"}
          fontSize={"10px"}
          fontWeight={500}
        >
          <option value="option1">GHO</option>
          <option value="option2">USDC</option>
          <option value="option3">ETH</option>
        </Select>
        <Text fontSize={"12px"} fontWeight={700}>
          AMOUNT
        </Text>
        <Input
          placeholder="$0 GHO"
          onChange={(e) => setamount(e.target.value)}
          variant={"unstyle"}
          textAlign={"center"}
          fontSize={"28px"}
          fontWeight={700}
        />
        <Text fontSize={"18px"} fontWeight={400} color={"#263238"}>
          $0 ARS
        </Text>
        <ButtonC
          background={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.08) 0.58%, rgba(0, 111, 238, 0.30) 99.87%)"
          }
          height={"23px"}
          borderRadius={"9px"}
          fontSize={"12px"}
          fontWeight={400}
        >
          MAX
        </ButtonC>
      </Stack>
      <Stack w={"100%"} align={"center"} padding={4}>
        <Button
          align="center"
          width={"100%"}
          onClick={() => Send()}
          isDisabled={address === "" || amount == ""}
          isLoading={loading}
        >
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
};
