import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { IUser } from '../types/user'
interface IAuthContext {
  user: IUser
  handleLogin: (loginData: ILoginData) => Promise<void>
}
interface IAuthContextProviderProps {
  children: React.ReactNode
}

interface ILoginData {
  email: string
  password: string
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({
  children
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const navigate = useNavigate()

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&senha=${loginData.password}`
      )
      if (data.length === 1) {
        setUser(data[0])
        navigate('/feed')
      } else {
        alert('Usuario não encontrado\n Email ou senha Inválidos')
      }
      console.log('retorno api', data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
