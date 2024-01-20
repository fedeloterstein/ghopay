"use client";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { CopyIcon } from "@/components/icons/CopyIcon";
import { ReciveIconV2 } from "@/components/icons/ReciveIconV2";
import { Button } from "@/components/ui/Button";
import { convertFormat } from "@/utils/convertFormat";
import { copyText } from "@/utils/copyText";
import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";

export default function Page({ params }: { params: { slug: string } }) {
  const toast = useToast();

  const copy = () => {
    copyText(params.slug[0]);
    toast({
      title: "Address copy.",
      description: `${params.slug[0]}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

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
        gap={8}
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
              <ReciveIconV2 />
            </Stack>
            <Heading color={"white"} fontSize={"14px"} fontWeight={400}>
              Transfer
            </Heading>
          </HStack>
          <Box />
        </HStack>
        <Center flexDirection={"column"} gap={8}>
          <QRCodeSVG size={215} value={params.slug[0]} />
          <Text>Scan to pay</Text>
          <HStack
            w={"296px"}
            height={"56px"}
            padding={2}
            background={"white"}
            justify={"space-between"}
            borderRadius={"12px"}
            border={"2px solid"}
            shadow={"0px 1px 2px 0px rgba(0, 0, 0, 0.05)"}
            borderColor={"rgba(120, 40, 200, 0.27)"}
          >
            <Text
              bgClip="text"
              bgGradient={
                "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
              }
              fontSize={"14px"}
              fontWeight={500}
            >
              {convertFormat(params.slug[0])}
            </Text>
            <HStack
              background={"E6E6E6"}
              borderRadius={"9px"}
              p={"4px 12px 4px 7px"}
              cursor={"pointer"}
              onClick={copy}
            >
              <CopyIcon />
              <Text
                fontSize={"11px"}
                fontWeight={600}
                bgClip="text"
                bgGradient={
                  "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
                }
              >
                Copy
              </Text>
            </HStack>
          </HStack>
        </Center>
      </Stack>
      <Stack p={4} gap={8}>
        <Button width={"auto"}>Request Payment</Button>
        <Button width={"auto"} background={"black"}>
          Rechange GHO with Stripe
        </Button>
      </Stack>
    </Stack>
  );
}
