import { Checkbox, Td, Tr } from '@chakra-ui/react'

type Props = {
  hasCheckbox?: boolean
  children: React.ReactNode
}

export const TableBodyItem = ({ hasCheckbox, children }: Props) => {
  return (
    <Tr>
      {hasCheckbox && (
        <Td px="6">
          <Checkbox colorScheme="pink" />
        </Td>
      )}
      {children}
    </Tr>
  )
}
