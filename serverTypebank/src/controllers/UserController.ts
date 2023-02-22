import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
  userService: UserService

  constructor(userService = new UserService()) {
    this.userService = userService
  }

  createUser = (req: Request, res: Response) => {
    const userData = req.body
    if (!userData.name) {
      return res.status(400).json({ message: 'Nome obrigatorio' })
    }
    this.userService.createUser(userData.name, userData.email)

    return res.status(201).json({ message: 'Usuario criado' })
  }

  getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers()
    return res.status(200).json(users)
  }
}
