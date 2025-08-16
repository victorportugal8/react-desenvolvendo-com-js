import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const animes = [
        'Attack on Titan',
        'Dragon Ball',
        'Hunter x Hunter',
        'Jujutsu Kaisen',
        'Naruto',
        'One Piece',
        'Solo Leveling'
    ];

    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do personagem.</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do personagem" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo do personagem" />
                <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
                <ListaSuspensa label="Anime" itens={animes} />
            </form>
        </section>
    )
}

export default Formulario