import { Icon, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IconType } from 'react-icons/lib'

type Props = {
  href: string
  children: string
  icon: IconType
}

export const NavLink = ({ href, children, icon }: Props) => {
  return (
    <NextLink href={href} passHref>
      <Link style={{ display: 'flex', alignItems: 'center' }}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}
