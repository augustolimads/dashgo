import { Flex } from '@chakra-ui/react'
import { Header } from 'src/components/Header'
import { Sidebar } from 'src/components/Sidebar'

type Props = {
  children: React.ReactNode
}

export const DashboardWraper = ({ children }: Props) => {
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
