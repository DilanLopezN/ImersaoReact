import { api } from './api'

export const Login = async (email: string): Promise<void> => {
  const data: any = await api
  if (email !== data.email) {
    return alert('Email invalido')
  }

  alert(`Bem vindo! ${email}`)
}
