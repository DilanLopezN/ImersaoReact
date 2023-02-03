import { BankAccount } from './class/BankAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Dilan', 10)
const companyAccount: CompanyAccount = new CompanyAccount('americanas', 2)
const bankAcccount: BankAccount = new BankAccount('typebank', 123)
bankAcccount.deposit(500)
console.log(bankAcccount.getBalance())

peopleAccount.deposit(200)
peopleAccount.withdraw(100)
console.log(peopleAccount.getBalance())

companyAccount.deposit(200)
companyAccount.getLoan(300)
console.log(companyAccount.getBalance())
