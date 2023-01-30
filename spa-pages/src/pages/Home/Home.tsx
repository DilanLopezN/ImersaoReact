import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { TextContent, Title, Container } from './styles'
import banner from '../../assets/banner.svg'
import { Button } from '../../components/Button'
export function Home() {
  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/login')
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <span>Codifique</span> seu futuro!
          </Title>
          <TextContent>
            Domine a melhor tecnologia para desenvolvimento web, encare qualquer
            desafio e construa interfaces do futuro com <span>React</span>
          </TextContent>
          <Button title="Aprenda agora" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={banner} alt="banner do app" />
        </div>
      </Container>
    </>
  )
}
