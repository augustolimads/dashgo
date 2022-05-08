import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type Props = {
  isWide?: boolean
}

export const Profile = ({ isWide }: Props) => {
  return (
    <Flex align="center">
      {isWide && (
        <Box mr="4" textAlign="right">
          <Text>Augusto Lima</Text>
          <Text color="gray.300" fontSize="small">
            augustolimads@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Augusto Lima" />
    </Flex>
  )
}
