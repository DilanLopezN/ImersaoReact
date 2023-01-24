import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
export function Home() {
  return (
    <>
      <Header />

      <Link to="/login" style={{ textDecoration: 'none' }}>
        Fazer login
      </Link>
    </>
  )
}
