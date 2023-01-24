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
export function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo react" />
          <SearchInput>
            <Input placeholder="Buscar ..." />
          </SearchInput>
          <Menu>code anything</Menu>
          <Menu>anywhere</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}
