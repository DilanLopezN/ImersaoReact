import { createContext, useState } from 'react'
import { IUser } from '../types/user'
interface IAuthContext {
  user: IUser
}
interface IAuthContextProviderProps {
  children: React.ReactNode
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({
  children
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
