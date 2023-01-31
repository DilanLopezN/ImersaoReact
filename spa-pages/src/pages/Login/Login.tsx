import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
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

import { useAuth } from '../../hooks/useAuth'

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

interface IFormsData {
  email: string
  password: string
}
export function Login() {
  const { handleLogin } = useAuth()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<IFormsData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  console.log(isValid, errors)
  const onSubmit = async (formData: IFormsData) => {
    handleLogin(formData)
  }
  function validateButton() {
    if (!isValid) {
      return true
    } else {
      return false
    }
  }

  console.log('retorno validation button', validateButton())

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
          <Title>Fazer login</Title>
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
              <Button
                title="Entrar"
                type="submit"
                isDisabled={validateButton()}
              />
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
