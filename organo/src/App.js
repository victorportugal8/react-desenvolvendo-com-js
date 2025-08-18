import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'

function App() {
  const [personagens, setPersonagens] = useState([])
  const aoNovoCadastro = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrado={personagem => aoNovoCadastro(personagem)} />
    </div>
  );
}

export default App;