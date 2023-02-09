import { Box } from '@chakra-ui/react'
export const Form = ({ children }: any) => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      {children}
    </Box>
  )
}
