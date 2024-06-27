import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonCard from "../BotonCard"

const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = ({ foto, cerrarDialog, alternarFavorito }) => {

    return <>
        {foto && <>
            <Overlay />
            <DialogEstilizado open={!!foto} onClose={cerrarDialog}>
                <Imagen foto={foto} expandida={true} alternarFavorito={alternarFavorito} />
                <form method="dialog">
                    <BotonCard formMethod="dialog" > 
                        <img src="/icons/cerrar.png" alt="Icono de cerrar" />
                    </BotonCard>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom