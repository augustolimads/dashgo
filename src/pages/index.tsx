import { Flex, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Input } from 'src/components/Form/Input'

const Home: NextPage = () => {
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
      >
        <Input label="Email" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <Button type="submit" mt="2" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
