const conta = {
  id: '123',
  email: 'di@teste.com',
  password: '123456',
  name: 'Dilan',
  balance: 500.0
}

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
