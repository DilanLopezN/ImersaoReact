import { getLocalStorage } from './storage'

describe('storage', () => {
  const getItem = jest.spyOn(Storage.prototype, 'getItem')
  it('deve retornar objeto localStorage', () => {
    getLocalStorage()
    expect(getItem).toHaveBeenCalled()
  })
})
