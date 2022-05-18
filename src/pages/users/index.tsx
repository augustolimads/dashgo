import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  Spinner,
  Td,
  Text,
  Th
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiPencilLine } from 'react-icons/ri'

import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { TableWrapper } from 'src/components/TableWrapper'
import { TableHead } from 'src/components/TableWrapper/TableHead'
import { TableBody } from 'src/components/TableWrapper/TableBody'
import { TableBodyRow } from 'src/components/TableWrapper/TableBodyRow'
import { Pagination } from 'src/components/Pagination'
import { useUsers } from 'src/hooks/useUsers'

const UserList: NextPage = () => {
  const [page, setPage] = useState(1)
  // isFetching is more lightweight than isLoading
  const { data, isLoading, isFetching, error } = useUsers(page)

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
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      <Td>{user.createdAt}</Td>
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
