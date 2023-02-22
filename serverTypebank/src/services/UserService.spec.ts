import { User, UserService } from './UserService'

describe('UserService', () => {
  const mockDb: User[] = []
  const userService = new UserService(mockDb)

  it('Deve adicionar novo usuário', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    userService.createUser('test', 'test@gmail.com')
    expect(mockConsole).toHaveBeenCalledWith(mockDb)
  })
})
