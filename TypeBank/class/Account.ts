export abstract class Account {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.accountNumber = accountNumber
    this.name = name
  }

  getName = (): string => {
    return this.name
  }
  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (total: number): void => {
    if (this.validateStatus()) {
      this.balance += total
      console.log('Você depositou')
    }
  }

  withdraw = (total: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= total) {
        this.balance -= total
        console.log(`você sacou ${total} saldo atual: ${this.balance}`)
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error()
  }
}
