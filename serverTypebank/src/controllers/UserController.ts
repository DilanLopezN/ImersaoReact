import { Request, Response } from 'express'
export class UserController {
  createUser = (req: Request, res: Response) => {
    const body = req.body
    return res.status(201).json({ message: 'Usuario criado' })
  }
}
