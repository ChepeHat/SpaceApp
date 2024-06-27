import styled from 'styled-components'
import BotonTag from './BotonTag'
import tags from './tags.json'

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
`
const TagTitulo = styled.h3`
    font-size: 24px; 
    color: #D9D9D9;
    margin: 0;
    `

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`
    
const Tag = ({ setTag }) => {
    return <TagContainer>
        <TagTitulo> Buscar por Tags: </TagTitulo>
        <Div>
            {tags.map(tag =><BotonTag 
                key={tag.id} 
                onClick={() => setTag(tag.tag)}>{tag.titulo}
            </BotonTag>
            )}
        </Div>
    </TagContainer>
}

export default Tag