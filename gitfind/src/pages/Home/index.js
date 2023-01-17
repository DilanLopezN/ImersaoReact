import Header from '../../components/Header'
import background from '../../assets/catgit.png'
import './style.css'
import Repos from '../../components/Repos'

function App() {
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
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>

          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/92648265?v=4"
              className="profileImage"
              alt="user pictures profile"
            />
            <h2>Dilan Lopez</h2>
            <p>Descrição</p>
          </div>
        </div>

        <hr className="divisor" />

        <Repos title="Repositorios Dilan" description="Todos repositorios" />
      </div>
    </div>
  )
}

export default App
