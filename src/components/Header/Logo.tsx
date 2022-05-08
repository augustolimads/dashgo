import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Link href="/dashboard" passHref>
      <a>
        <Text
          fontSize={['xl', '2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="tight"
          w={['auto', '64']}
        >
          dashgo
          <Text as="span" color="pink.500" ml="1">
            .
          </Text>
        </Text>
      </a>
    </Link>
  )
}
