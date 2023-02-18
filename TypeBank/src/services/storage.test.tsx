import { json } from 'node:stream/consumers'
import { createLocalStorage, getLocalStorage } from './storage'

const typeBank = {
  login: false
}
describe('storage', () => {
  it('deve retornar objeto localStorage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'typebank')
    getLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('typebank')
  })

  it('deve criar objeto no localStorage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith(
      'typebank',
      JSON.stringify(typeBank)
    )
  })
})
