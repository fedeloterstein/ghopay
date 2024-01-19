import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { GHOIcon } from "@/components/icons/GHOIcon";
import { TransferIcon } from "@/components/icons/TransferIcon";
import { convertFormat } from "@/utils/convertFormat";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatEther } from "viem";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Stack>
      <Header params={params} />
      <Stack p={4}>
        <Text fontSize={"14px"} fontWeight={600} pb={2}>
          January
        </Text>
        <Transaction params={params} />
      </Stack>
    </Stack>
  );
}

const Transaction = ({ params }: any) => {
  return (
    <Stack
      borderRadius={"14px"}
      background={"white"}
      p={4}
      shadow={
        "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 15px 0px rgba(0, 0, 0, 0.03)"
      }
      gap={6}
    >
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={500}
        >
          Send to
        </Text>
        <Text fontSize={"12px"} fontWeight={500}>
          {convertFormat(params.slug[0])}
        </Text>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={500}
        >
          Amount
        </Text>
        <HStack>
          <GHOIcon />
          <Text fontSize={"12px"} fontWeight={500}>
            {formatEther(params.slug[1])} GHO
          </Text>
        </HStack>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={500}
        >
          {" "}
          Status owner sign
        </Text>
        <Stack
          w={"83px"}
          align={"center"}
          background={params.slug[2] === "true" ? "#7ECE18" : "#FBBF24"}
          p={1}
          borderRadius={"9px"}
          color={"white"}
        >
          <Text fontSize={"12px"} fontWeight={600}>
            {params.slug[2] === "true" ? "APPROVE" : "PENDING"}
          </Text>
        </Stack>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={500}
        >
          Status owner 2 sign
        </Text>
        <Stack
          w={"83px"}
          align={"center"}
          background={params.slug[3] === "true" ? "#7ECE18" : "#FBBF24"}
          p={1}
          borderRadius={"9px"}
          color={"white"}
        >
          <Text fontSize={"12px"} fontWeight={600}>
            {params.slug[3] === "true" ? "APPROVE" : "PENDING"}
          </Text>
        </Stack>
      </HStack>
      <HStack justify={"space-between"}>
        <Text
          bgClip="text"
          bgGradient={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          fontSize={"12px"}
          fontWeight={500}
        >
          {" "}
          Status Transaction
        </Text>
        <HStack>
          <Box
            w={2}
            h={2}
            borderRadius={"50%"}
            background={params.slug[4] === "true" ? "#7ECE18" : "#FBBF24"}
          />
          <Text fontSize={"12px"} fontWeight={500}>
            {params.slug[4] === "true" ? "Confirmed" : "Programed"}
          </Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

const Header = ({ params }: any) => {
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
          href={"/transfer"}
        />
        <Heading color={"white"} fontSize={"14px"} fontWeight={600}>
          💰 Transaction
        </Heading>
        <Box />
      </HStack>

      <HStack background={"white"} p={4} borderRadius={"20px"} gap={4}>
        <IconButton
          aria-label={""}
          icon={<TransferIcon />}
          variant={"unstyle"}
          w={"44px"}
          h={"44px"}
          background={"rgba(172, 172, 176, 0.24)"}
        />
        <HStack>
          <GHOIcon />
          <Text fontSize={"20px"} fontWeight={700}>
            {" "}
            {formatEther(params.slug[1])} GHO
          </Text>
        </HStack>
      </HStack>
    </Stack>
  );
};
