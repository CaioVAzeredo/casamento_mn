import styled from "styled-components";

import SegundaImagemTelaPequena from '../../Assets/imagens/segundaImagem-tela-pequena.png';
import SegundaImagemTelaTablet from '../../Assets/imagens/segundaImagem-tela-tablet.png';
import SegundaImagemTelaGrande from '../../Assets/imagens/segundaImagem-tela-grande.png';
import ModalSobreNos from '../ModalSobreNos';

import Button from "../Button";
import { useState } from "react";

const Containerh1 = styled.h1`
text-align: center;
color: #F04A00;
font-size: 40px;

@media screen and (min-width: 1025px) {
    width: 600px;
    text-align: center;
}
`;

const ContainerParagrafo = styled.p`
color: #f5621e;
font-size: 20px;
width: 100%;
margin: 0 auto;
padding-bottom: 15px;

@media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    padding-left: 23%;
    width: 60%;
}

@media screen and (max-width: 1024px){
    
    text-shadow: 1px 1px 15px rgb(0, 0, 0);
}

`;


const ContainerSectionSecundario = styled.section`
    button {
        display: block;
        margin-left: 30vw;
    }   

@media(max-width: 768px) {
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
    button {
        display: block;
        margin-left: 45%;
    }

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

    .SegundaImgPequeno {
        display: none;
    }

    .SegundaImgGrande {
        display: none;
    }
}

@media screen and (min-width: 1025px) {
    button {
        display: block;
        margin-left: 43%;
    }

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
        z-index: 1;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
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
        transform: translateX(-110%);
        flex-direction: column;
    }
}
  p:first-of-type,
  p:nth-of-type(2) {
    text-indent: 20px; 
   
}

p.margem-superior {
    margin-top: 20px;
  }
`;

function ContainerSecundario() {
    const [Modal, setModal] = useState(false);

    function statusModal() {
        setModal(!Modal);
    }

    function ClickForaDoModal(e) {
        if (e.target === e.currentTarget) {
            setModal(false);
        }
    }

    return (
        <ContainerSectionSecundario>
            <img src={SegundaImagemTelaPequena} alt='Tela pequena' className='SegundaImgPequeno' />
            <img src={SegundaImagemTelaTablet} alt='Tela tablet' className='SegundaImgTablet' />
            <img src={SegundaImagemTelaGrande} alt='Tela grande' className='SegundaImgGrande' />
            <div className='ContainerTexto'>
                <Containerh1>SOBRE NÓS</Containerh1>
                <ContainerParagrafo>
                    <p>
                        Dois conhecidos que se aproximaram por acaso. A gente se encontrava em um churrasco, um barzinho, uma festa junina de igreja, até que, em uma festa, eu lhe pedi um beijo e ela recusou 😥.  Mas logo ela viu a besteira que tinha feito e voltou correndo pra mim. Desde então, nunca nos separamos. Começamos a sair e eu logo admiti estar apaixonado, ao que ela respondeu com um teimoso "não tá, não", mas no fundo ela sabia que tanto eu quanto ela estávamos.
                    </p>
                    <p>
                        Nosso namoro começou na cafeteria preferida... </p>
                </ContainerParagrafo >

                <Button informacao="Ler mais" onClick={statusModal} />
            </div>
            {Modal && (
                <ModalSobreNos
                    onClickForaDoModal={ClickForaDoModal}
                    onClickStatusModal={statusModal}
                />
            )}
        </ContainerSectionSecundario>
    );
}

export default ContainerSecundario;
