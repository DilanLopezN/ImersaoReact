import { Button } from '../Button'
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Container, SearchInput, Input, Menu, Wrapper, Row } from './styles'
import { UserPicture } from '../Card/styles'

import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const navigate = useNavigate()
  const { user, handleSignOut } = useAuth()
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="logo react" />
          </Link>

          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/92648265?v=4" />
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
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
