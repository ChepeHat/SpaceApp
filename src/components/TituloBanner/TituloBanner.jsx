import styled from "styled-components"

// Estructura de un 'wrapper', este envuelve los elementos en HTMl
const FigureStyled = styled.figure`
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-height: 328px;
    margin: 0;
    max-width: 100%;
    border-radius: 20px;

    background-image: ${props => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-repeat: no-repeat;
`

const TitleStyled = styled.h1`
    max-width: 300px;
    padding: 0 64px;

    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    color: white;
`

const Banner = ({texto, backgroundImage} ) => {
    return (
    <FigureStyled $backgroundImage={backgroundImage} alt="espacio">
        <TitleStyled>{texto}</TitleStyled>
    </FigureStyled>
    )
}

export default Banner