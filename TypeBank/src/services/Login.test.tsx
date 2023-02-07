import { Login } from './Login'
import * as mockApi from './api'

describe('deve exibir alert com mensagem bem vindos', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  const mockEmail = 'di@teste.com'
  it('login', async () => {
    await Login('di@teste.com')
    expect(mockAlert).toBeCalledWith(`Bem vindo! ${mockEmail}`)
  })

  it('deve exibir erro caso email seja invalido', async () => {
    await Login('invalido@email')
    expect(mockAlert).toHaveBeenCalledWith('Email invalido')
  })
})
