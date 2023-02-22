import { UserService } from './UserService'
jest.mock('../repositories/UserRepository')
const mockUserRepository = require('../repositories/UserRepository')
describe('UserService', () => {
  const userService = new UserService(mockUserRepository)
  it('Deve adicionar novo usuário', async () => {
    mockUserRepository.createUser = jest.fn()
    await userService.createUser('test', 'test@example.com', '123456')
    expect(mockUserRepository.createUser).toHaveBeenCalled()
  })
})
