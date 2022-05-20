import {
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardCard } from 'src/components/DashboardWrapper/DashboardCard'
import { Input } from 'src/components/Form/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { api } from 'src/services/axios'
import { queryClient } from 'src/services/queryClient'

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatória'),
  password: yup.string().required('Senha obrigatória'),
  password_confirmation: yup.string().required('Senha obrigatória')
})

const CreateUser: NextPage = () => {
  const router = useRouter()
  const createUser = useMutation(
    async (user: FieldValues) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date()
        }
      })
      return response.data.user
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      }
    }
  )

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <DashboardWraper>
      <DashboardCard title="Criar usuário">
        <Divider borderColor="gray.700" />
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDir="column"
          gap={['6', '8']}
        >
          <Stack gap={['6', '8']}>
            <SimpleGrid spacing={['6', '8']} w="100%" columns={[1, 1, 2]}>
              <Input
                label="Nome Completo"
                id="name"
                register={register}
                errors={errors}
              />
              <Input
                label="E-mail"
                id="email"
                type="email"
                register={register}
                errors={errors}
              />
            </SimpleGrid>

            <SimpleGrid spacing={['6', '8']} w="100%" columns={[1, 1, 2]}>
              <Input
                label="Senha"
                id="password"
                type="password"
                register={register}
                errors={errors}
              />
              <Input
                label="Confirmação da senha"
                id="password_confirmation"
                type="password"
                register={register}
                errors={errors}
              />
            </SimpleGrid>
          </Stack>

          <HStack justify="flex-end">
            <Link href="/users" passHref>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
            <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
              Salvar
            </Button>
          </HStack>
        </Flex>
      </DashboardCard>
    </DashboardWraper>
  )
}

export default CreateUser
