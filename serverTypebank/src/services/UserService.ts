export interface User {
  name: string
  email: string
}

const db = [
  {
    name: 'Dilan',
    email: 'dilan@gmail.com'
  }
]
export class UserService {
  db: User[]

  constructor(database = db) {
    this.db = database
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email
    }
    this.db.push(user)
    console.log(this.db)
  }

  getAllUsers = () => {
    console.log(this.db)
    return this.db
  }

  deleteUser = (name: string, email: string) => {
    const user = {
      name,
      email
    }
    this.db.push(user)
    const userToRemove = this.db.find(user => user.name === name)
    if (userToRemove) {
      console.log('Removendo usuario', userToRemove)
    }
  }
}
