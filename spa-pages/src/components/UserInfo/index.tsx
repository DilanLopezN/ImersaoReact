import React from 'react'
import { Container, UserPicture, Progress } from './styles'
export function UserInfo({ name, image, percentual }) {
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
