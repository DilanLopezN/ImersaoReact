import { Button } from '../Button'
import logo from '../../assets/logo.svg'
import {
  Container,
  SearchInput,
  Input,
  Menu,
  MenuRight,
  Wrapper,
  Row
} from './styles'
import { UserPicture } from '../Card/styles'
export function Header({ userIsAuth }) {
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
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
