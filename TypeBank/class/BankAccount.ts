import { Account } from './Account'

export class BankAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  deposit = (total: number): void => {
    if (this.validateStatus()) {
      this.balance += total + 10
      console.log('A empresa depositou')
    }
  }
}
