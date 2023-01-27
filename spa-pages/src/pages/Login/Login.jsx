import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Wrapper, Row, SubTitle, Title, Container, Column } from './styles'
import { Input } from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'

import { Button } from '../../components/Button'

export function Login() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm()
  const onSubmit = data => console.log(data)

  const handleClickSignIn = () => {
    navigate('/feed')
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>Densevolvimento multiplataforma</Title>
          <SubTitle>
            Com <span>React</span> construa interfaces do futuro com
            escalabilidade e perfomace usando o melhor do desenvolvimento web
            moderno
          </SubTitle>
          <SubTitle>
            Com <span>React Native</span> construa app's modernos reaproveitando
            todo seu conhecimento de react para Android e IOS com o mesmo código
            para ambas plataformas
          </SubTitle>
        </Column>
        <Column>
          <Wrapper>
            <Title>Faça seu cadastro</Title>
            <SubTitle>Faça seu login make your destiny.</SubTitle>
          </Wrapper>

          <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" onClick={handleClickSignIn} type="button" />
          </form>
          <Row>
            <p>Esqueci minha senha</p>

            <p>Criar conta</p>
          </Row>
        </Column>
      </Container>
    </>
  )
}
