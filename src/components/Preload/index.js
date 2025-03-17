import styled from "styled-components";
import imgLogo from "../../Assets/imagens/LogoMN-1.png"
const PreloadContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #FFE0E4; /* Cor de fundo */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Para garantir que fique sobre todos os elementos */
    transition: opacity 0.5s ease-out;
    
    img {
        width: 150px; /* Ajuste o tamanho da imagem */
        height: auto;
        animation: pulse 1.5s infinite alternate;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
    }
`;

function Preload({ isLoading }) {
    return (
        <PreloadContainer style={{ opacity: isLoading ? 1 : 0, visibility: isLoading ? "visible" : "hidden" }}>
            <img src={imgLogo} alt="Carregando..." />
        </PreloadContainer>
    );
}

export default Preload;
