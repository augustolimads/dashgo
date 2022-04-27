import { Flex, Stack } from '@chakra-ui/react'
import { Header } from 'src/components/Header'
import { Sidebar } from 'src/components/Sidebar'

type Props = {
  children: React.ReactNode
  cardMode?: boolean
}

export const DashboardWraper = ({ children, cardMode }: Props) => {
  if (cardMode) {
    return (
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />
          <Stack flex="1" rounded="2xl" bg="gray.800" p="8" gap="8">
            {children}
          </Stack>
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}
