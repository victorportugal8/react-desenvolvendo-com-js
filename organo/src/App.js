import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Anime from './components/Anime'

function App() {
  const animes = [
    {nome: 'Attack on Titan', corPrimaria: '#57C278', corSecundaria: '#D9F7E9'},
    {nome: 'Bleach', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF'},
    {nome: 'Dragon Ball', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
    {nome: 'Hunter x Hunter', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
    {nome: 'Jujutsu Kaisen', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5'},
    {nome: 'Naruto', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'},
    {nome: 'One Piece', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoCadastro = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario animes={animes.map(anime => anime.nome)} aoCadastrado={personagem => aoNovoCadastro(personagem)} />
      {animes.map(anime => <Anime key={anime.nome} nome={anime.nome} corPrimaria={anime.corPrimaria} corSecundaria={anime.corSecundaria} personagens={personagens.filter(personagem => personagem.anime === anime.nome)} />)}
    </div>
  )
}

export default App