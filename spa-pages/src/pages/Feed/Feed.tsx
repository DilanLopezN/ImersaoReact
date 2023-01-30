import React from 'react'
import { Header } from '../../components/Header'
import { Container, Column, Title, TitleHigh } from './styles'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
export function Feed() {
  return (
    <>
      <Header userIsAuth={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHigh>#TOP 5 DA SEMANA</TitleHigh>
          <UserInfo
            name="Dilan Lopez"
            percentual={70}
            image="https://avatars.githubusercontent.com/u/92648265?v=4"
          />
          <UserInfo
            name="Dilan Lopez"
            percentual={70}
            image="https://avatars.githubusercontent.com/u/92648265?v=4"
          />
        </Column>
      </Container>
    </>
  )
}
