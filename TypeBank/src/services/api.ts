const conta = {
  email: 'di@teste.com',
  password: '123456',
  name: 'Dilan'
}

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
