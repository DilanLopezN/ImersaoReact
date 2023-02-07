import { Login } from './Login'

describe('deve exibir alert com mensagem bem vindos', () => {
  it('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    Login('di@email.com')
    expect(window.alert).toBeCalledWith('Bem vindo! di@email.com')
  })
})
