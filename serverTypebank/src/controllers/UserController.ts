import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
  createUser = (req: Request, res: Response) => {
    const userService = new UserService()
    const userData = req.body
    if (!userData.name) {
      return res.status(400).json({ message: 'Nome obrigatorio' })
    }
    userService.createUserInDb(userData.name, userData.email)

    return res.status(201).json({ message: 'Usuario criado' })
  }
}
