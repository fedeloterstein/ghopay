import { convertFormat } from "@/utils/convertFormat";
import { Box, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Address } from "viem";

export const InputWalletOwner = ({address}: any) => {
    return (
      <HStack>
        <Box
          display={"flex"}
          w={8}
          h={8}
          padding={2}
          justifyContent={"center"}
          alignItems={"center"}
          background={
            "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
          }
          borderRadius={"12px"}
        >
          <Text color={"white"} fontSize={"12px"} fontWeight={400}>
            A1
          </Text>
        </Box>
        <HStack
          borderRadius={"12px"}
          border={"2px solid"}
          borderColor={"#E4E4E7"}
          minW={"274px"}
          h={"56px"}
          p={2}
          mb={4}
        >
          <Stack>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              bgClip="text"
              bgGradient={
                "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
              }
            >
              Wallet Address Owner
            </Text>
            <Input
              variant={"unstyled"}
              placeholder={convertFormat(address as Address)}
              disabled
            />
          </Stack>
          <Text>✅</Text>
        </HStack>
      </HStack>
    );
  };
  