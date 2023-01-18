import { useState } from 'react'
import Header from '../../components/Header'
import background from '../../assets/catgit.png'
import './style.css'

import ItemList from '../../components/ItemList'

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState([])

  const handleGetData = async () => {
    const data = await fetch(`https://api.github.com/users/${user}`)
    const userData = await data.json()

    if (userData.name) {
      const { avatar_url, name, bio, login } = userData
      setCurrentUser({ avatar_url, name, bio, login })
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
    const userRepos = await reposData.json()

    if (userRepos.length) {
      const maxRepos = userRepos.slice(0, 4)
      console.log()
      setRepos(maxRepos)
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <img src={background} alt="background" className="background" />
        </div>
        <hr className="divisor" />
        <div className="content">
          <div className="infos">
            <input
              name="usuario"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <div className="profile">
              <img
                src={currentUser.avatar_url}
                className="profileImage"
                alt="user pictures profile"
              />
              <h2>{currentUser.name}</h2>
              <strong>@{currentUser.login}</strong>
              <p>{currentUser.bio}</p>
            </div>
          ) : null}
        </div>

        <hr className="divisor" />

        <div className="reposContainer">
          <div className="reposContent">
            <h3>Repositorios de {currentUser?.name}</h3>
            {repos?.length
              ? repos.map(repo => (
                  <ItemList title={repo.name} description={repo.description} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
