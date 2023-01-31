import React from 'react'
import { Container, UserPicture, Progress } from './styles'

interface IUserPic {
  name?: string
  image?: string
  percentual: number
}
export function UserInfo({ name, image, percentual }: IUserPic) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <h2>{name}</h2>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
