const db = [
  {
    name: 'Dilan',
    email: 'dilan@gmail.com'
  }
]
export class UserService {
  createUserInDb = (name: string, email: string) => {
    const user = {
      name,
      email
    }
    db.push(user)
    console.log(db)
  }
}
