import { Header } from '../../components/Header'
import { Container } from './styles'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
export function Feed() {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo
          name="Dilan Lopez"
          percentual={70}
          image="https://avatars.githubusercontent.com/u/92648265?v=4"
        />
      </Container>
    </>
  )
}
