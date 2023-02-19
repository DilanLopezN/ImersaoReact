import { json } from 'node:stream/consumers'
import {
  changeLocalStorage,
  createLocalStorage,
  getLocalStorage
} from './storage'

const typeBank = {
  login: false
}
describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
  it('deve retornar objeto localStorage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'typebank')
    getLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('typebank')
  })

  it('deve criar objeto no localStorage', () => {
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith(
      'typebank',
      JSON.stringify(typeBank)
    )
  })

  it('deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(typeBank)
    expect(mockSetItem).toHaveBeenCalledWith('typebank', typeBank)
  })
})
