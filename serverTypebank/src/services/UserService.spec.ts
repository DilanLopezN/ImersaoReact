import { User, UserService } from './UserService'

describe('UserService', () => {
  const mockDb: User[] = []
  const userService = new UserService(mockDb)

  it('Deve adicionar novo usuário', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    userService.createUser('test', 'test@gmail.com', 1)
    expect(mockConsole).toHaveBeenCalledWith(mockDb)
  })
  it('Deve chamar usuarios', () => {
    const getUserMock = jest.spyOn(global.console, 'log')
    userService.getAllUsers()
    expect(getUserMock).toHaveBeenCalledWith(mockDb)
  })
})
