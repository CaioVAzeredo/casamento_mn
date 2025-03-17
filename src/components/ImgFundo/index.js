import styled from "styled-components";
import ImgameFundo from '../../Assets/imagens/fundo.png';

const ContainerDiv = styled.div`
    position: fixed; 
    z-index: 999; /* O modal fica abaixo da barra de rolagem */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: -1; 

    img {
        height: 100vh;
        @media(max-width: 768px){
         margin: -74px;
        }

    }
`;
function ImgFundo() {
    return (<ContainerDiv>
        <img src={ImgameFundo} alt="Fundo" />
        <img src={ImgameFundo} alt="Fundo" />
    </ContainerDiv>)
}
export default ImgFundo