import styled from "styled-components"
import ItemNav from "./ItemNav"

const ListaStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 236px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaStyled>
                    <ItemNav iconoActivo='icons/home-activo.png' iconoInactivo ='icons/home-inactivo.png' activo  >
                        Inicio
                    </ItemNav> 
                    <ItemNav iconoActivo='icons/mas-vistas-activo.png' iconoInactivo ='icons/mas-vistas-inactivo.png'  >
                        Más vistas
                    </ItemNav> 
                    <ItemNav iconoActivo='icons/me-gusta-activo.png' iconoInactivo ='icons/me-gusta-inactivo.png'  >
                    Más Me Gusta
                    </ItemNav> 
                    <ItemNav iconoActivo='icons/nuevas-activo.png' iconoInactivo ='icons/nuevas-inactivo.png'  >
                        Nuevas
                    </ItemNav> 
                    <ItemNav iconoActivo='icons/sorprendeme-activo.png' iconoInactivo ='icons/sorprendeme-inactivo.png'  >
                        Sorpréndame
                    </ItemNav> 
                </ListaStyled>
            </nav>
        </aside>
    
    )

}

export default BarraLateral