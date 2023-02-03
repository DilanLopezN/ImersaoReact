/* typebank 
  requisits;
  Name,
  Number
  deposit,
  withdraw
*/
import { Account } from './class/Account'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

class Admin extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
}
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Dilan', 10)
const companyAccount: CompanyAccount = new CompanyAccount('americanas', 2)
console.log(peopleAccount)
console.log(companyAccount)
