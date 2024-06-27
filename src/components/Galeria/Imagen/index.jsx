import fav from './favorito.png'
import favActivo from './favorito-activo.png'
import expandir from './expandir.png'
import styled from 'styled-components'
import BotonCard from '../../BotonCard'

const FigureStyle = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$expandida ? '90%' : '360px')};
    max-width: 100%;
    margin: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    flex-grow: 1;
    & >img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        padding: 12px;
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;  
        box-sizing: border-box;
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 20px;
        }
        h4 {
            flex-grow: 1;
            font-size: 16px;
        }
        h3, h4{
            margin: 0;
            
        }
    }
`;

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagen = ( {foto, expandida=false, solicitarZoom, alternarFavorito} ) =>{

//Constante para likear, cambia un icono por otro 
const iconoFavorito = foto.favorita ? favActivo : fav

    return (
    <FigureStyle $expandida={expandida} id={`foto-${foto.id}`} >
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <FooterStyle>
                <h4>{foto.fuente}</h4>
                <BotonCard onClick={()=>alternarFavorito(foto)} >
                    <img src={iconoFavorito} alt='icono de favorito'/>
                </BotonCard>
                {!expandida && <BotonCard aria-hidden={expandida} onClick={()=>solicitarZoom(foto)}>
                        <img src={expandir} alt='icono de expandir'/>
                </BotonCard>}
            </FooterStyle>
        </figcaption>
    </FigureStyle>
    )
}

export default Imagen 