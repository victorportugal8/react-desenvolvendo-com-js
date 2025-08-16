import Banner from './components/Banner'
import CampoTexto from './components/CampoTexto'

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o nome do personagem" />
      <CampoTexto label="Cargo" placeholder="Digite o cargo do personagem" />
      <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
    </div>
  );
}

export default App;