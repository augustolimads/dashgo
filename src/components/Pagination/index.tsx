import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

type Props = {
  totalCount: number
  registersPerPage: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

function generatePagesArray(from: number, to: number) {
  return [...Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export const Pagination = ({
  totalCount = 1,
  registersPerPage = 1,
  currentPage = 1,
  onPageChange
}: Props) => {
  const lastPage = Math.ceil(totalCount / registersPerPage)
  const siblingsCount = lastPage > 5 ? 2 : 1
  const fromIndexItem = registersPerPage * currentPage - registersPerPage + 1
  const toIndexItem = currentPage * registersPerPage

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Flex
      flexDirection={['column', 'row']}
      justify="space-between"
      align="center"
      gap="4"
    >
      <Box>
        <strong>{fromIndexItem}</strong> - <strong>{toIndexItem}</strong> de{' '}
        <strong>{totalCount}</strong>
      </Box>
      <HStack>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} index={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              index={page}
              key={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          index={currentPage}
          isActive
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              index={page}
              key={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} index={lastPage} />
          </>
        )}
      </HStack>
    </Flex>
  )
}
