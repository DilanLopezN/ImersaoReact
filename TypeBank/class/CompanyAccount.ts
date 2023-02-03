import { Account } from './Account'

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (total: number): void => {
    if (this.validateStatus()) {
      this.balance += total
    }
    console.log('Você pegou um empréstimo')
  }
}
