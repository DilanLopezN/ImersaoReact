import { Button } from '../Button'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { Container, SearchInput, Input, Menu, Wrapper, Row } from './styles'
import { UserPicture } from '../Card/styles'

interface IHeader {
  userIsAuth?: boolean
}

export function Header({ userIsAuth }: IHeader) {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo react" />

          {userIsAuth ? (
            <>
              <SearchInput>
                <Input placeholder="Buscar ..." />
              </SearchInput>
              <Menu>code anything</Menu>
              <Menu>anywhere</Menu>
            </>
          ) : (
            <>
              <Menu>code anything</Menu>
              <Menu>anywhere</Menu>
            </>
          )}
        </Row>
        <Row>
          {userIsAuth ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/92648265?v=4" />
            </>
          ) : (
            <>
              <Button title="Home" onClick={() => navigate('/')} />
              <Button title="Entrar" onClick={() => navigate('/login')} />
              <Button title="Cadastrar" onClick={() => navigate('/register')} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
