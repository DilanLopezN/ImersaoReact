import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'

import * as yup from 'yup'
import {
  MdEmail,
  MdLock,
  MdOutlineDriveFileRenameOutline
} from 'react-icons/md'
import {
  Column,
  Container,
  SubTitle,
  Title,
  Wrapper,
  StyledDiv
} from './styles'

const schema = yup
  .object({
    name: yup
      .string()
      .max(10, 'máximo de 10 caracteres')
      .required('campo obrigatorio'),
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

export function Register() {
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
        `users?email=${formData.email}&senha=${formData.password}&nome=${formData.name}`
      )
      if (data.length === 1) {
        {
          /*  
          possivel implementação de cadastro
          precisaria criar server e usar o metodo vindo do fs do node
      writeFileSync('../../db.json', data) */
        }

        navigate('/login')
      } else {
        alert('Usuario não encontrado\n Email ou senha Inválidos')
      }
      console.log('retorno api', data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>Faça seu cadastro e comece agora mesmo</Title>
        </Column>
        <Wrapper>
          <Title>Cadastrar</Title>
          <SubTitle>Fazer cadastro</SubTitle>
          <form action="">
            <Input
              name="name"
              control={control}
              placeholder="Seu nome"
              leftIcon={<MdOutlineDriveFileRenameOutline />}
              errorMessage={errors?.name?.message}
            />

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
        </Wrapper>
      </Container>
    </>
  )
}
