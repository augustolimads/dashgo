import { Button } from '@chakra-ui/react'

type Props = {
  index: number
  isActive?: boolean
  onPageChange?: (page: number) => void
}

export const PaginationItem = ({
  index,
  isActive = false,
  onPageChange
}: Props) => {
  if (isActive) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {index}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange && onPageChange(index)}
    >
      {index}
    </Button>
  )
}
