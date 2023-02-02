/* typebank 
  requisits;
  Name,
  Number
  deposit,
  withdraw
*/

class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.accountNumber = accountNumber
    this.name = name
  }

  deposit = () => {
    console.log('Você depositou')
  }

  withdraw = () => {
    console.log('Você sacou')
  }
}

/* 
const testAccount: Account = new Account('contatest', 1)
testAccount.deposit()
testAccount.withdraw()

*/

class Admin extends Account {
  balance: number

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    this.balance = 20
  }

  getBalance = () => {
    console.log(this.balance)
  }
}

const adminTestAccount: Admin = new Admin('adminAcc', 2)
console.log(adminTestAccount)
