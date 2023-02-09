import { api } from './api'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
export const login = async (email: string): Promise<void> => {
  const { isLoggedIn } = useContext(AppContext)
  const data: any = await api
  if (email !== data.email) {
    return alert('Email invalido')
  }

  alert(`Bem vindo! ${email}`)
}
