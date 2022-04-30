import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export const Sidebar = () => {
  return (
    <Stack as="aside" w="64" mr="8" gap="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="Automação">
        <NavLink href="/users" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink href="/users" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
