import './Personagem.css'

const Personagem = ({nome, cargo, imagem}) =>{
    return(
        <div className='personagem'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Personagem