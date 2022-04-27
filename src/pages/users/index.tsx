import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { DashboardWraper } from 'src/components/DashboardWraper'
import { Pagination } from 'src/components/Pagination'

const UserList: NextPage = () => {
  return (
    <DashboardWraper cardMode>
      <Flex justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Usuários
        </Heading>

        <Link href="/users/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} />}
            cursor="pointer"
          >
            Criar novo
          </Button>
        </Link>
      </Flex>

      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px="6" color="gray.300" w="8">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuário</Th>
            <Th>Data de cadastro</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="pink" />
            </Td>
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
                >
                  Editar
                </Button>
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Pagination />
    </DashboardWraper>
  )
}

export default UserList
