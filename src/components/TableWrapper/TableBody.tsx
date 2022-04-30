import { Tbody } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export const TableBody = ({ children }: Props) => {
  return <Tbody>{children}</Tbody>
}
