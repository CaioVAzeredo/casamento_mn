import ImagemTelaPequena from '../../Assets/imagens/tela-celular.png';
import ImagemTelaTablet from '../../Assets/imagens/tela-tablet.png';
import ImagemTelaGrande from '../../Assets/imagens/tela-grande.png';
import styled from 'styled-components';

const ContainerSection = styled.section`
.data {
    color: var(--cor-primaria);
    text-align: center;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

@media(max-width: 768px) {
    .imgPequeno {
        width: 100vw;
    }

    .imgTablet {
        display: none;
    }

    .imgMedia {
        display: none;
    }

    .data {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 25px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h2 {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 23px;
    }

    .relogio {
        width: 300px;
        margin: 0 auto;
    }

    .relogioInfo {
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-size: 15px;
    }

    p {
        color: var(--cor-primaria);
        margin: 0 auto;
        
    }

    .contagem {
        color: var(--cor-primaria);
        text-align: center;
        font-size: 40px;
        margin: 0px;
    }
    .contagemRegressiva {
        margin-top: -4px;
        background-color: #FFE0E4;
    }

}

@media screen and (min-width: 769px) and (max-width: 1024px) {
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

}

@media screen and (min-width: 1025px) {

height: 590px;
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
        position: relative;
        z-index: 1;
        left: 20%;
        transform: translateX(-20%) translateY(-140%);
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
        padding-left: 30px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        width: 78%;
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
    
}


`

function ContainerPrincipal(props) {
    return (
        <ContainerSection>
            <img src={ImagemTelaPequena} alt='Tela pequena' className='imgPequeno' />
            <img src={ImagemTelaTablet} alt='Tela media' className='imgTablet' />
            <img src={ImagemTelaGrande} alt='Tela media' className='imgMedia' />
            <div className='containerContagem'>
                <section className='contagemRegressiva'>
                    <div className='data'>31 de maio de 2025</div>
                    <h2>CONTAGEM REGRESSIVA</h2>
                    <div className='relogio'>
                        <p className='contagem'>{props.timer}</p>
                        <div className='relogioInfo'>
                            <p>Dias</p><p>horas</p><p>min</p><p>seg</p>
                        </div>
                    </div>
                </section>
                <div className='espacoContagem'></div>
            </div>
        </ContainerSection>
    )
}

export default ContainerPrincipal