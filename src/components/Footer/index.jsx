import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components"


const FooterStyle = styled.footer`
    background: #04244F;

    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 20px 30px;
    box-sizing: border-box;
    margin-top: 100px;

`

const DivLogos = styled.div`
    display: flex;
    gap:20px;
` 

const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #1da1f2; 
    }   
`

const Footer = () => {
    return (
    <FooterStyle>
        <DivLogos>
            <IconLink href='https://x.com/chepehat'>
                <FaTwitter size={30} />
            </IconLink>
            <IconLink href='https://www.linkedin.com/in/armandosombrerero/'>
                <FaLinkedin size={30} />
            </IconLink>
            <IconLink href='https://www.instagram.com/chepehat' >
                <FaInstagram size={30} />
            </IconLink>
        </DivLogos>
        <h4>Dev x Sombrerero</h4>
    </FooterStyle>
    )
}

export default Footer