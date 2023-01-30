import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import * as yup from 'yup'
import { Header } from '../../components/Header'
import {
  Wrapper,
  SubTitle,
  Title,
  Container,
  Column,
  StyledDiv
} from './styles'
import { Input } from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button'

const schema = yup
  .object({
    email: yup
      .string()
      .email('email não e válido')
      .required('campo obrigatorio'),
    password: yup
      .string()
      .min(4, 'Minimo de 4 caracteres')
      .required('campo obrigatorio')
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
  const onSubmit = async formData => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      )
      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Usuario não encontrado\n Email ou senha Inválidos')
      }
      console.log('retorno api', data)
    } catch (error) {
      alert('Houve um erro: ', error)
    }
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

        <Wrapper>
          <Title>Faça seu cadastro</Title>
          <SubTitle>Faça seu login make your destiny.</SubTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              control={control}
              placeholder="E-mail"
              leftIcon={<MdEmail />}
              errorMessage={errors?.email?.message}
            />
            <Input
              name="password"
              control={control}
              placeholder="Senha"
              type="password"
              leftIcon={<MdLock />}
              errorMessage={errors?.password?.message}
            />
            <StyledDiv>
              <Button title="Entrar" type="submit" />
            </StyledDiv>
          </form>
          <StyledDiv>
            <p>Criar conta</p>

            <strong>Esqueci minha senha</strong>
          </StyledDiv>
        </Wrapper>
      </Container>
    </>
  )
}
