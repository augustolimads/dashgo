import { Box, Button, Icon, Td, Text, Th } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiPencilLine } from 'react-icons/ri'
import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { TableWrapper } from 'src/components/TableWrapper'
import { TableHead } from 'src/components/TableWrapper/TableHead'
import { TableBody } from 'src/components/TableWrapper/TableBody'
import { TableBodyItem } from 'src/components/TableWrapper/TableBodyItem'

const UserList: NextPage = () => {
  return (
    <DashboardWraper>
      <DashboardCard title="Usuários" createUrl="/users/create">
        <TableWrapper>
          <TableHead>
            <Th>Usuário</Th>
            <Th>Data de cadastro</Th>
          </TableHead>
          <TableBody>
            <TableBodyItem>
              <Td>
                <Box>
                  <Text fontWeight="bold">Augusto Lima</Text>
                  <Text fontSize="sm" color="gray.300">
                    augustolimads@gmail.com
                  </Text>
                </Box>
              </Td>
              <Td>26 de Abril de 2022</Td>
              <Td>
                <Link href="/users/edit" passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="sm" />}
                    cursor="pointer"
                    lineHeight={1}
                  >
                    Editar
                  </Button>
                </Link>
              </Td>
            </TableBodyItem>
          </TableBody>
        </TableWrapper>
      </DashboardCard>
    </DashboardWraper>
  )
}

export default UserList
