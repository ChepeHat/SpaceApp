import styled from "styled-components"

const ItemStyled = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$activo ? '#7b78e5' : '#d9d9d9' } ;
    font-family: ${props => props.$activo ? 'GandhiSansBold' :  'GandhiSansRegular' };
`

const ItemNav = ({ children, iconoActivo, iconoInactivo, activo=false }) => {
    return <ItemStyled $activo={activo} >
        <img src={ activo ?  iconoActivo : iconoInactivo } alt="icono" />
        {children}
    </ItemStyled>

}

export default ItemNav