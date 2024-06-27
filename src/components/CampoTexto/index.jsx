import styled from "styled-components"
import search from './search.png'

const ContainerStyle = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyle = styled.input`
    width: 566px;
    height: 56px;
    box-sizing: border-box;
    padding: 12px 16px;
    
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;    

    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({ setFiltro, filtro }) => {

    return (
    <ContainerStyle>
            <InputStyle 
                onChange={(e) => {setFiltro(e.target.value)} } 
                type='text' 
                placeholder="¿Qué estás buscando?"/>
            <IconoLupa src={search} alt="ícono de lupa" />
    </ContainerStyle>
    )
}

export default CampoTexto

