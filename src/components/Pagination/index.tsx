import { Box, Flex, HStack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export const Pagination = () => {
  return (
    <Flex
      flexDirection={['column', 'row']}
      justify="space-between"
      align="center"
      gap="4"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <PaginationItem index={1} isActive />
        <PaginationItem index={2} />
        <PaginationItem index={3} />
      </HStack>
    </Flex>
  )
}
