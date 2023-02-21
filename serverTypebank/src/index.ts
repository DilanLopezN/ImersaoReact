import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Typebank API'
  })
})

server.listen(5000, () => {
  console.log('Servidor Iniciado/On')
})
