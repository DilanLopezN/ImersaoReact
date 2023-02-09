import { login } from './login'
import * as mockApi from './api'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    isLoggedIn: true
  })
}))

describe('deve exibir alert com mensagem bem vindos', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  const mockEmail = 'di@teste.com'
  it('login', async () => {
    await login('di@teste.com')
    expect(mockAlert).toBeCalledWith(`Bem vindo! ${mockEmail}`)
  })

  it('deve exibir erro caso email seja invalido', async () => {
    await login('invalido@email')
    expect(mockAlert).toHaveBeenCalledWith('Email invalido')
  })
})
