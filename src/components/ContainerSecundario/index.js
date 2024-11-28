import styled from "styled-components"

import SegundaImagemTelaPequena from '../../Assets/imagens/segundaImagem-tela-pequena.png'
import SegundaImagemTelaTablet from '../../Assets/imagens/segundaImagem-tela-tablet.png'
import SegundaImagemTelaGrande from '../../Assets/imagens/segundaImagem-tela-grande.png'

const Containerh1 = styled.h1`
text-align: center;
color: #F04A00;
font-size: 40px;
text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.5);

@media screen and (min-width: 1025px) {
width: 600px;
text-align: center;
}
`

const ContainerParagrafo = styled.p`
color: #D24607;
text-shadow: 2px 1px px rgba(0, 0, 0, 0.5);
font-size: 20px;
width: 80%;
margin: 0 auto;
padding-bottom: 15px;

@media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
width: 80%;
margin: 0 auto;
width:60%;
}

`

const ContainerSectionSecundario = styled.section`
@media(max-width: 768px) {
    /* ------------------------------------------------ */
    position: relative;

    .SegundaImgTablet {
        display: none;
    }

    .SegundaImgGrande {
        display: none;
    }

    .SegundaImgPequeno {
        z-index: 1;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .ContainerTexto {
        position: absolute;
        left: 30px;
        width: 90%;
        z-index: 2;

    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .imgPequeno {
        display: none;
    }

    .imgMedia {
        display: none;
    }

    .imgTablet {
        width: 60%;
        margin: 0 20%;
    }

    h2 {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 28px;
    }

    .relogio {
        width: 300px;
        margin: 0 auto;
    }

    .relogioInfo {
        padding-left: 35px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-size: 20px;
    }

    p {
        color: var(--cor-primaria);
        margin: 0;
    }

    .data {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 30px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    .contagem {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 50px;
        margin: 0px;
    }

    h1 {
        text-align: center;
    }

    position: relative;

    .SegundaImgTablet {
        width: 400px;
        position: absolute;
        top: 0;
        width: 60%;
        margin: 0 20%;
        z-index: 1;
    }


    .ContainerTexto {
        position: absolute;
        left: 30px;
        width: 90%;
        z-index: 2;

    }

    /* ------------------------------------ */
    .SegundaImgPequeno {
        display: none;
    }

    .SegundaImgGrande {
        display: none;
    }

}

@media screen and (min-width: 1025px) {


    main {
        height: 1000px;
        width: 1000px;
        margin: 0 auto;
    }

    .imgPequeno {
        display: none;
    }

    .imgTablet {
        display: none;
    }

    /* --------------------------------- */
    .SegundaImgPequeno {
        display: none;
    }

    .SegundaImgTablet {
        display: none;
    }

    .principal {
        display: flex;
        height: 591px;

    }

    .imgMedia {
        width: 979px;
        height: 692px;
        margin: 0 1px;
        position: relative;
        /* Fixar a imagem na tela */
        z-index: 1;
        top: -100px;
        /* Ajuste a posição vertical conforme necessário */
        left: 50%;
        /* Posiciona horizontalmente no centro */
        transform: translateX(-50%);
        /* Alinha a imagem exatamente no centro */
        flex-direction: column;
    }

    .containerContagem {
        margin-top: 8%;
        height: 300px;
        position: relative;
        z-index: 1;
        left: -80%;
        transform: translateX(-42%) translateY(93%);
        flex-direction: column;
    }


    .contagemRegressiva {
        padding-top: 1px;
        width: 400px;
        height: 200px;
        position: relative;
        margin: 0;
        z-index: 2;
    }



    h2 {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 28px;
    }

    .relogio {
        width: 300px;
        margin: 0 auto;
    }

    .relogioInfo {
        padding-left: 35px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-size: 20px;
    }

    p {
        color: var(--cor-primaria);
        margin: 0;
    }

    .contagem {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 50px;
        margin: 0px;
    }

    /* ----------------------------------------------- */
    display: flex;
    height: 699px;

    .SegundaImgGrande {
        z-index: 1;
        position: relative; 
        height: 699px;
    }
    
    .ContainerTexto {
        z-index: 2;
        position: relative;
        z-index: 1;
        transform: translateX(-110%);
        flex-direction: column;

    }
    
}
`

function ContainerSecundario() {
    return (
        <ContainerSectionSecundario>
            <img src={SegundaImagemTelaPequena} alt='Tela pequena' className='SegundaImgPequeno' />
            <img src={SegundaImagemTelaTablet} alt='Tela tablet' className='SegundaImgTablet' />
            <img src={SegundaImagemTelaGrande} alt='Tela grande' className='SegundaImgGrande' />
            <div className='ContainerTexto'>
                <Containerh1>SOBRE NÓS</Containerh1>
                <ContainerParagrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</ContainerParagrafo>
            </div>
        </ContainerSectionSecundario>
    )
}

export default ContainerSecundario