import { login } from './login'

const mocksetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    setIsLoggedIn: mocksetIsLoggedIn
  })
}))

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate
}))

describe('deve exibir alert com mensagem bem vindos', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('login', async () => {
    await login('di@teste.com')
    expect(mocksetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockNavigate).toHaveBeenCalledWith('/123')
  })

  it('deve exibir erro caso email seja invalido', async () => {
    await login('invalido@email')

    expect(mockAlert).toHaveBeenCalledWith('Email invalido')
  })
})
