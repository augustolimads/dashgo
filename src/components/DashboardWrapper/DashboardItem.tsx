import { Box, Text } from '@chakra-ui/react'

type Props = {
  title: string
  children: React.ReactNode
}

export const DashboardItem = ({ title, children }: Props) => {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Box display="block" overflowX="scroll">
        {children}
      </Box>
    </Box>
  )
}
