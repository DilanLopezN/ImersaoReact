import { Box, Center, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { login } from '../services/login'
import { ButtonContent } from './Button'

export const Form = () => {
  const [email, setEmail] = useState('')

  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
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
    </Box>
  )
}
