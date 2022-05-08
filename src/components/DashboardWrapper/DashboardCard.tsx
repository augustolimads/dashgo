import {
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'

type Props = {
  title: string
  children: React.ReactNode
  createUrl?: string
}

export const DashboardCard = ({ title, children, createUrl }: Props) => {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  if (createUrl) {
    return (
      <Stack flex="1" rounded="2xl" bg="gray.800" p="8" gap="8">
        <Flex justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            {title}
          </Heading>

          <Link href={createUrl || ''} passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
              cursor="pointer"
            >
              {isWide ? 'Criar novo' : 'Novo'}
            </Button>
          </Link>
        </Flex>
        {children}
      </Stack>
    )
  }

  return (
    <Stack flex="1" rounded="2xl" bg="gray.800" p="8" gap="8">
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>
      {children}
    </Stack>
  )
}
