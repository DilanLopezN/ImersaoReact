import { Link } from 'react-router-dom'
export function Home() {
  return (
    <>
      <h1>Home</h1>
      <button>
        <Link to="/login">Fazer Login</Link>
      </button>
    </>
  )
}
