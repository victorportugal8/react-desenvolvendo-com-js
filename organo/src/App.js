import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Anime from './components/Anime'

function App() {
  const animes = [
    {nome: 'Attack on Titan', corPrimaria: '#57C278', corSecundaria: '#D9F7E9'},
    {nome: 'Dragon Ball', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF'},
    {nome: 'Hunter x Hunter', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
    {nome: 'Jujutsu Kaisen', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
    {nome: 'Naruto', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5'},
    {nome: 'One Piece', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'},
    {nome: 'Solo Leveling', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoCadastro = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrado={personagem => aoNovoCadastro(personagem)} />
      {animes.map(anime => <Anime key={anime.nome} nome={anime.nome} corPrimaria={anime.corPrimaria} corSecundaria={anime.corSecundaria} />)}
    </div>
  )
}

export default App