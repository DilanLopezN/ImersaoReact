import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContextProvider } from './components/AppContext'
import { Layout } from './components/Layout'
import Account from './pages/Account'
import Home from './pages/Home'

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
