import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Anime from './components/Anime'

function App() {
  const [personagens, setPersonagens] = useState([])
  const aoNovoCadastro = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrado={personagem => aoNovoCadastro(personagem)} />
      <Anime nome="Attack on Titan" />
      <Anime nome="Dragon Ball" />
      <Anime nome="Hunter x Hunter" />
    </div>
  )
}

export default App