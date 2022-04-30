import { Checkbox, Th, Thead, Tr } from '@chakra-ui/react'

type Props = {
  hasCheckbox?: boolean
  children: React.ReactNode
}

export const TableHead = ({ hasCheckbox, children }: Props) => {
  return (
    <Thead>
      <Tr>
        {hasCheckbox && (
          <Th px="6" color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
        )}
        {children}
      </Tr>
    </Thead>
  )
}
