import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Header } from '../../components/Header'
import { Wrapper, Row, SubTitle, Title, Container, Column } from './styles'
import { Input } from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button'

const schema = yup
  .object({
    email: yup.string().email('email não e válido').required(),
    password: yup.number().min(8, 'Minimo de 8 caracteres').required()
  })
  .required()

export function Login() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  console.log(isValid, errors)
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              control={control}
              placeholder="E-mail"
              leftIcon={<MdEmail />}
            />
            <Input
              name="password"
              control={control}
              placeholder="Senha"
              type="password"
              leftIcon={<MdLock />}
            />
            <Button title="Entrar" type="submit" />
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
