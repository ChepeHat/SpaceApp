import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import logo from './logo.png'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
        flex-direction: column;
        justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: row;
    }   
`
const LogoStyle = styled.img`
    width: 150px;
`

const Header = ({setFiltro, filtro}) => {
    return <HeaderEstilizado>
        <LogoStyle src={logo} alt='Logo Space-App'/>
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
}

export default Header