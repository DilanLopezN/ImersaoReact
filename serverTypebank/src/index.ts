import express, { Request, Response } from 'express'
import { UserController } from './controllers/UserController'

const server = express()

const db = [
  {
    name: 'Dilan',
    email: 'dilan@gmail.com'
  }
]

const userController = new UserController()

server.use(express.json())
server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Typebank API'
  })
})

server.post('/user', userController.createUser)

server.listen(5000, () => {
  console.log('Servidor Iniciado/On')
})
