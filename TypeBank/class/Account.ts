export abstract class Account {
  private name: string
  accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.accountNumber = accountNumber
    this.name = name
  }

  setName = (name: string): void => {
    this.name = name
  }
  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log('Você depositou')
    }
  }

  withdraw = (): void => {
    console.log('Você sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error()
  }
}
