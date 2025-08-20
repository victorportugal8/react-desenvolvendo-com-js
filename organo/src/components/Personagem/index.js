import './Personagem.css'

const Personagem = (props) =>{
    return(
        <div className='personagem'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape' style={{backgroundColor: props.corSecundaria}}>
                <h4>{props.nome}</h4>
                <h5>{props.anime}</h5>
            </div>
        </div>
    )
}

export default Personagem