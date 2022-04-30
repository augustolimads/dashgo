import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Augusto Lima</Text>
        <Text color="gray.300" fontSize="small">
          augustolimads@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Augusto Lima" />
    </Flex>
  )
}
