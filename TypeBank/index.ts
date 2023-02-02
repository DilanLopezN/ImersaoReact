/* typebank 
  requisits;
  Name,
  Number
  deposit,
  withdraw
*/

abstract class Account {
  name: string
  accountNumber: number
  balance: number = 0

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

  getBalance = () => {
    console.log(this.balance)
  }
}

class Admin extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
}

class PeopleAccount extends Account {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}
