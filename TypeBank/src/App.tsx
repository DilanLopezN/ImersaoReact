import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './components/AppContext'
import { Layout } from './components/Layout'
import MainRoutes from './routes/routes'
import { changeLocalStorage, createLocalStorage } from './services/storage'

function App() {
  createLocalStorage()
  changeLocalStorage({
    login: true
  })
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
