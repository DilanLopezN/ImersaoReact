export abstract class Account {
  name: string
  accountNumber: number
  balance: number = 0

  constructor(name: string, accountNumber: number) {
    this.accountNumber = accountNumber
    this.name = name
  }

  deposit = (): void => {
    console.log('Você depositou')
  }

  withdraw = (): void => {
    console.log('Você sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
}
