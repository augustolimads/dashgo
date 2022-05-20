import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  Link as ChakraLink,
  Spinner,
  Td,
  Text,
  Th
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { RiPencilLine } from 'react-icons/ri'

import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { TableWrapper } from 'src/components/TableWrapper'
import { TableHead } from 'src/components/TableWrapper/TableHead'
import { TableBody } from 'src/components/TableWrapper/TableBody'
import { TableBodyRow } from 'src/components/TableWrapper/TableBodyRow'
import { Pagination } from 'src/components/Pagination'
import { useUsers, handlePrefetchUser } from 'src/hooks/useUsers'
import { getUsers } from 'src/services/endpoints/getUsers'
import { User } from 'src/types/User'

type Props = {
  users: User[]
}

const UserList: NextPage<Props> = ({ users }) => {
  const [page, setPage] = useState(1)
  // isFetching is more lightweight than isLoading
  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users
  })

  return (
    <DashboardWraper>
      <DashboardCard
        title="Usuários"
        isFetching={isFetching}
        isLoading={isLoading}
        createUrl="/users/create"
      >
        {isLoading ? (
          <Flex justify="center" align="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center" align="center">
            <Text>Falha ao obter dados dos usuários</Text>
          </Flex>
        ) : (
          <>
            <TableWrapper>
              <TableHead>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
              </TableHead>
              <TableBody>
                {data &&
                  data.users.map((user) => (
                    <TableBodyRow key={user.id}>
                      <Td>
                        <Box>
                          <ChakraLink
                            color="purple.400"
                            onMouseEnter={() =>
                              handlePrefetchUser(String(user.id))
                            }
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </ChakraLink>
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
            <Pagination
              registersPerPage={10}
              totalCount={data?.totalCount || 0}
              currentPage={page}
              onPageChange={setPage}
            />
          </>
        )}
      </DashboardCard>
    </DashboardWraper>
  )
}

export default UserList

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)

  return {
    props: {
      users
    }
  }
}
