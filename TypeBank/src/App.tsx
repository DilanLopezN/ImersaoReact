import { ChakraProvider } from '@chakra-ui/react'
import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Account from './pages/Account'
import Home from './pages/Home'

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext)
const AppContextProvider = ({ children }: any) => {
  const user = 'dilan'
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/conta/:id" element={<Account />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
