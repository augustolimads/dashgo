import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: Props) => {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMatchExactHref) {
    if (asPath === rest.href || asPath === rest.as) {
      isActive = true
    }
  } else {
    if (
      asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as))
    ) {
      isActive = true
    }
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.500'
      })}
    </Link>
  )
}
