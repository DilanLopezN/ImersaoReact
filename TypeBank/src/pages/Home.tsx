import { Form } from '../components/Form'
import { Box, Center, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { login } from '../services/login'
import { ButtonContent } from '../components/Button'

export default function Home() {
  const [email, setEmail] = useState('')
  return (
    <Form>
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login </h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />

        <Input placeholder="password" />
        <Center>
          <ButtonContent onClick={() => login(email)} title="Entrar" />
        </Center>
      </Box>
    </Form>
  )
}
