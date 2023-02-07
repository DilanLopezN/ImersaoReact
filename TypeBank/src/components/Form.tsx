import { Box, Center, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { api } from '../services/api'
import { Login } from '../services/login'
import { ButtonContent } from './Button'

interface IUserData {
  email: string
  password: string
  name: string
}

export const Form = () => {
  const [email, setEmail] = useState('')
  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    const getData = async () => {
      const data: IUserData | any = await api
      setUserData(data)
    }
    getData()
  }, [])

  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login {userData?.name}</h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />

        <Input placeholder="password" />
        <Center>
          <ButtonContent onClick={() => Login(email)} title="Entrar" />
        </Center>
      </Box>
    </Box>
  )
}
