import { Request, Response } from 'express'

const db = [
  {
    name: 'Dilan',
    email: 'dilan@gmail.com'
  }
]
export class UserController {
  createUser = (req: Request, res: Response) => {
    const data = req.body
    db.push(data)
    console.log(db)
    return res.status(201).json({ message: 'Usuario criado' })
  }
}
