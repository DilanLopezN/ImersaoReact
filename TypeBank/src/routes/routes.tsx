import { Link, Route, Routes } from 'react-router-dom'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
import Account from '../pages/Account'
import Home from '../pages/Home'

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/conta/:id"
        element={
          isLoggedIn ? (
            <Account />
          ) : (
            <>
              <h1>Necessario realizar login</h1>
              <Link to="/"> Clique aqui </Link>
            </>
          )
        }
      />
    </Routes>
  )
}
export default MainRoutes
