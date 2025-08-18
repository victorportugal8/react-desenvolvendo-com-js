import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{
    const animes = [
        'Attack on Titan',
        'Dragon Ball',
        'Hunter x Hunter',
        'Jujutsu Kaisen',
        'Naruto',
        'One Piece',
        'Solo Leveling'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [anime, setAnime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCadastrado({
            nome,
            cargo,
            imagem,
            anime
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do personagem" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo do personagem" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Anime" itens={animes} valor={anime} aoAlterado={valor => setAnime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario