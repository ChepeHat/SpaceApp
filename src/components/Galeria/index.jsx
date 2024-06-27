import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from './Tags'
import Imagen from './Imagen'

const GaleriaContainer = styled.div`
    display: flex;
    gap: 30px;
`
const SeccionFluida = styled.section`
    flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
const Galeria = ({fotos=[], fotoSeleccionada, alternarFavorito, setTag}) => {

    return (
        <>
        <Tag setTag={setTag} />
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo> Navegue por la Galería </Titulo>
                <ImagenesContainer>
                    {fotos.map(foto=> <Imagen 
                        foto={foto}
                        key={foto.id} 
                        alternarFavorito={alternarFavorito}
                        solicitarZoom={fotoSeleccionada}
                    />)}
                </ImagenesContainer>
            </SeccionFluida>
            <Populares />

        </GaleriaContainer>
        


        </>
    )
}

export default Galeria