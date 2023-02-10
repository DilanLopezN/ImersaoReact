import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import { StyledHeader } from '../styles/style.header'

interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  const logOut = () => {
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <StyledHeader>
      <Flex padding={5}>
        {title}

        {isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logOut()}>Sair</Button>
          </>
        )}
      </Flex>
    </StyledHeader>
  )
}
