import { login } from './login'

describe('deve exibir alert com mensagem bem vindos', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('login', async () => {
    const mockEmail = 'di@teste.com'
    const response = await login(mockEmail)
    expect(response).toBeTruthy()
  })

  it('deve exibir erro caso email seja invalido', async () => {
    const response = await login('invalido@email')

    expect(response).toBeFalsy()
  })
})
