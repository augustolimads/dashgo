import { Box, Stack, Text } from '@chakra-ui/react'

type Props = {
  title: string
  children: React.ReactNode
}

export const NavSection = ({ title, children }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack gap="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
