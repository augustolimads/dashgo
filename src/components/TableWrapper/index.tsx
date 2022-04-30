import { Table } from '@chakra-ui/react'
import { Pagination } from '../Pagination'

type Props = {
  children: React.ReactNode
}

export const TableWrapper = ({ children }: Props) => {
  return (
    <>
      <Table colorScheme="whiteAlpha">{children}</Table>
      <Pagination />
    </>
  )
}
