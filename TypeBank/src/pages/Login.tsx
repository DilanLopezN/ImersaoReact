import { ChakraProvider } from '@chakra-ui/react'
import { Form } from '../components/Form'
export default function Login() {
  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  )
}
