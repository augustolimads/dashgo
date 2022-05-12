import { Table, TableContainer } from '@chakra-ui/react'
import { Pagination } from '../Pagination'

type Props = {
  children: React.ReactNode
}

export const TableWrapper = ({ children }: Props) => {
  return (
    <TableContainer maxW="calc(100vw - 7rem)">
      <Table colorScheme="whiteAlpha">{children}</Table>
    </TableContainer>
  )
}
