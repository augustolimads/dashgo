import { Box, Button, Icon, Td, Text, Th } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiPencilLine } from 'react-icons/ri'
import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { TableWrapper } from 'src/components/TableWrapper'
import { TableHead } from 'src/components/TableWrapper/TableHead'
import { TableBody } from 'src/components/TableWrapper/TableBody'
import { TableBodyRow } from 'src/components/TableWrapper/TableBodyRow'

const users = [
  {
    id: 1,
    name: 'Augusto Lima',
    email: 'augustolimads@gmail.com',
    created_at: '2022-04-26'
  },
  {
    id: 2,
    name: 'Viviane Lima',
    email: 'vivi@gmail.com',
    created_at: '2022-04-26'
  },
  {
    id: 3,
    name: 'Rafael Lima',
    email: 'rafael@gmail.com',
    created_at: '2022-04-26'
  },
  {
    id: 4,
    name: 'Thamiris Lima',
    email: 'tame@gmail.com',
    created_at: '2022-04-26'
  }
]

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
            {users.map((user) => (
              <TableBodyRow key={user.id}>
                <Td>
                  <Box>
                    <Text fontWeight="bold">{user.name}</Text>
                    <Text fontSize="sm" color="gray.300">
                      {user.email}
                    </Text>
                  </Box>
                </Td>
                <Td>{user.created_at}</Td>
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
              </TableBodyRow>
            ))}
          </TableBody>
        </TableWrapper>
      </DashboardCard>
    </DashboardWraper>
  )
}

export default UserList
