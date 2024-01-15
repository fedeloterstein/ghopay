import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { SavingsIcon } from '../icons/SavingsIcons'
import Link from 'next/link'

export const BorrowCard = () => {
  return (
  <HStack>
    <SavingsIcon />
    <Stack>
      <Text>Enjoy borrowing rate discounts on GHO APY 4.49-6.42%</Text>
      <Text as={Link} href={'/borrow'}>Invest Now</Text>
    </Stack>
  </HStack>
  )
}
