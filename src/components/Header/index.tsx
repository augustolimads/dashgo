import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from 'src/contexts/SidebarDrawer'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

export const Header = () => {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })
  const { onOpen } = useSidebarDrawer()

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
      {!isWide && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          lineHeight={2}
        ></IconButton>
      )}

      <Logo />
      {isWide && <Search />}

      <Flex align="center" ml="auto" gap="4">
        <NotificationsNav />
        <Profile isWide={isWide} />
      </Flex>
    </Flex>
  )
}
