import { Box, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const InputWalletSecurity = ({handleInputChange}: any) => {
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
        A2
      </Text>
    </Box>
    <HStack
      borderRadius={"12px"}
      border={"2px solid"}
      borderColor={"rgba(120, 40, 200, 0.27)"}
      minW={"274px"}
      h={"56px"}
      p={2}
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
          Wallet 2 Security
        </Text>
        <Input
          variant={"unstyled"}
          placeholder={"0xdbdb…d68e"}
          onChange={handleInputChange}
        />
      </Stack>
    </HStack>
  </HStack>
  )
}
