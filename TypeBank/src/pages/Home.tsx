import { Form } from '../components/Form'
import { Box, Center, Input } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { login } from '../services/login'
import { ButtonContent } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../components/AppContext'

export default function Home() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AppContext)
  const validadeUser = async (email: string) => {
    const loggedIn = await login(email)

    if (!loggedIn) {
      alert('Email inválido')
    } else {
      setIsLoggedIn(true)
      navigate('/conta/123')
    }
  }
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
          <ButtonContent
            onClick={(): any => validadeUser(email)}
            title="Entrar"
          />
        </Center>
      </Box>
    </Form>
  )
}
