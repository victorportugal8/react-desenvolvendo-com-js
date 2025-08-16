import Botao from '../Botao'
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

    const aoSalvar = (evento) =>{
        evento.preventDefault()
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do personagem" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo do personagem" />
                <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
                <ListaSuspensa obrigatorio={true} label="Anime" itens={animes} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario