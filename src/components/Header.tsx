import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeContent="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto" gap="4">
        <HStack
          gap="4"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Augusto Lima</Text>
            <Text color="gray.300" fontSize="small">
              augustolimads@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Augusto Lima" />
        </Flex>
      </Flex>
    </Flex>
  )
}