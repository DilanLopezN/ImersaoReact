import { json } from 'node:stream/consumers'
import { createLocalStorage, getLocalStorage } from './storage'

const typeBank = {
  login: false
}
describe('storage', () => {
  const getItem = jest.spyOn(Storage.prototype, 'getItem')
  it('deve retornar objeto localStorage', () => {
    getLocalStorage()
    expect(getItem).toHaveBeenCalled()
  })

  it('deve criar objeto no localStorage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith(
      'typeBank',
      JSON.stringify(typeBank)
    )
  })
})
