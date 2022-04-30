import { Button, Divider, HStack, SimpleGrid, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { Input } from 'src/components/Form/Input'

const EditUser: NextPage = () => {
  return (
    <DashboardWraper>
      <DashboardCard title="Editar usuário">
        <Divider borderColor="gray.700" />

        <Stack gap="8">
          <SimpleGrid minChildWidth="248px" spacing="8" w="100%">
            <Input label="Nome Completo" name="name" value="Augusto Lima" />
            <Input
              label="E-mail"
              name="email"
              type="email"
              value="augustolimads@gmail.com"
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="248px" spacing="8" w="100%">
            <Input label="Senha" name="password" />
            <Input
              label="Confirmação da senha"
              name="password_confirmation"
              type="password"
            />
          </SimpleGrid>
        </Stack>

        <HStack justify="flex-end">
          <Link href="/users" passHref>
            <Button colorScheme="whiteAlpha">Cancelar</Button>
          </Link>
          <Button colorScheme="pink">Salvar</Button>
        </HStack>
      </DashboardCard>
    </DashboardWraper>
  )
}

export default EditUser
