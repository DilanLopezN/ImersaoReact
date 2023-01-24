import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button title="teste" variant="secondary" />

      <Link to="/login" style={{ textDecoration: 'none' }}>
        Fazer login
      </Link>
    </>
  )
}
