import './App.css'
import { useState } from 'react'
import axios from 'axios'
function App() {
  const RandomDogAPI = axios.create({
    baseURL: 'https://random.dog/woof.json?include=jpg,gif'
  })
  const [dogRandom, setDogRandom] = useState('')

  async function loadRandomDog() {
    const res = await RandomDogAPI.get(
      'https://random.dog/woof.json?include=jpg,gif'
    )
    setDogRandom(res.data.url)
  }

  return (
    <div className="App">
      <div className="container">
        <img src={dogRandom} alt="" />
        <button onClick={() => loadRandomDog()}>Trocar dog</button>

        <p>Você e meu amorzinho te amo te amo</p>
        <p>Fim de semana vamo comer uma pitiza e assistir série</p>
      </div>
      <footer>
        Feito com <span>&#10084;</span> para Karen!
      </footer>
    </div>
  )
}

export default App
