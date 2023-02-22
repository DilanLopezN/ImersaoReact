import { EntityManager } from 'typeorm'
import { User } from '../entities/User'
import { getMockEntityManager } from '../__mocks__/mockEntityManager.mock'
import { UserRespository } from './UserRepository'

describe('UserRepository', () => {
  let userRepository: UserRespository
  let managerMock: Partial<EntityManager>
  const mockUser: User = {
    user_id: '12345',
    name: 'test user',
    email: 'teste@example.com',
    password: 'password'
  }
  beforeAll(async () => {
    const managerMock = await getMockEntityManager({
      saveReturn: mockUser
    })
    userRepository = new UserRespository(managerMock as EntityManager)
  })

  it('deve cadastrar novo usuario no db', async () => {
    const response = await userRepository.createUser(mockUser)
    expect(managerMock.save).toHaveBeenCalled()
    expect(response).toMatchObject(mockUser)
  })
})
