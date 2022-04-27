import NextLink from 'next/link'
import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export const Sidebar = () => {
  return (
    <Stack as="aside" w="64" mr="8" gap="12" align="flex-start">
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          GERAL
        </Text>
        <Stack gap="4" mt="8" align="stretch">
          <NextLink href="/dashboard" passHref>
            <Link style={{ display: 'flex', alignItems: 'center' }}>
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
          </NextLink>
          <NextLink href="/users" passHref>
            <Link style={{ display: 'flex', alignItems: 'center' }}>
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </NextLink>
        </Stack>
      </Box>
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          Automação
        </Text>
        <Stack gap="4" mt="8" align="stretch">
          <Link style={{ display: 'flex', alignItems: 'center' }}>
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Formulários
            </Text>
          </Link>
          <Link style={{ display: 'flex', alignItems: 'center' }}>
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Automação
            </Text>
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}
