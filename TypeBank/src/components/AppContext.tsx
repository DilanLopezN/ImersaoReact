import { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../services/storage'
interface IAppContext {
  user: string
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)
export const AppContextProvider = ({ children }: any) => {
  const storage = getLocalStorage()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const user = 'dilan'

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
