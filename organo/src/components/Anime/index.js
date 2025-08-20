import Personagem from '../Personagem'
import './Anime.css'

const Anime = (props) =>{
    const css = {backgroundColor: props.corSecundaria}

    return(
        <section className="anime" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Personagem />
        </section>
    )
}

export default Anime