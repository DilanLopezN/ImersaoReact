import Header from '../../components/Header'
import background from '../../assets/catgit.png'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <img src={background} alt="background" className="background" />
        </div>

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
