import { UserService } from '../services/UserService'
import { UserController } from './UserController'
import { Request } from 'express'
// import { makeMockRequest } from '../__mocks__/mockRequest.mock'
import { makeMockResponse } from '../__mocks__/mockResponse.mock'

describe('User Controller', () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn()
  }
  const userController = new UserController(mockUserService as UserService)

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'test',
        email: 'test@example.com'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({
      message: 'Usuario criado'
    })
  })
})
