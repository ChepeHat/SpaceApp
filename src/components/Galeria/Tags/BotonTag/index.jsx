import styled from "styled-components";

const BotonTag = styled.button`
    padding: 12px;
    background: rgba(217, 217, 217, .3);
    transition: background-color 0.3s ease;
    color: white;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
    box-sizing: border-box;
    border: 3px solid transparent;

    &:hover {
        border-color: #C98CF1;
    }
    /* border: ${ props => props.$border ? props.$border : 'none' }; */

`
export default BotonTag