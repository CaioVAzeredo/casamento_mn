import styled from "styled-components";
import imagemLogo from '../../Assets/imagens/LogoMN.png'

/* const LogoContainer = styled.div`
 display: flex;
 font-size: 30px;
` */
const LogoImage = styled.img`
 margin-right: 10px;
 height: 40px;
`


function Logo() {
    return (
            <LogoImage/>
        
    )
}

export default Logo;