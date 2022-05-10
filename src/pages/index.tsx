import { Flex, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Input } from 'src/components/Form/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const Home: NextPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    router.push('/dashboard')
  })

  console.log(watch('email'))

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        rounded={8}
        direction="column"
        gap={4}
        onSubmit={onSubmit}
      >
        <Input
          label="Email"
          type="email"
          id="email"
          register={register}
          errors={errors}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          register={register}
          errors={errors}
        />
        <Button
          type="submit"
          mt="2"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
