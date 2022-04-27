import { Box, Button, Flex, HStack } from '@chakra-ui/react'

export const Pagination = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>
      </HStack>
    </Flex>
  )
}
