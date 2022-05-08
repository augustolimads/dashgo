import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export const SidebarContent = () => {
  return (
    <Stack gap="12">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
