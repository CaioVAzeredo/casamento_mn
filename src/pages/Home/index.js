import { useEffect, useState } from 'react';
import ImagemTelaPequena from '../../Assets/imagens/tela-celular.png';
import ImagemTelaTablet from '../../Assets/imagens/tela-tablet.png';
import ImagemTelaGrande from '../../Assets/imagens/tela-grande.png';

import SegundaImagemTelaPequena from '../../Assets/imagens/segundaImagem-tela-pequena.png'
import SegundaImagemTelaTablet from '../../Assets/imagens/segundaImagem-tela-tablet.png'
import './estilo.css';
import styled from 'styled-components';

const Containerh1 = styled.h1`
text-align: center;
color: #F04A00;
font-size: 40px;
text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.5);
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

function Body() {
    const [timeLeft, setTimeLeft] = useState('0 dias 00:00:00');

    useEffect(() => {
        const targetDate = new Date("2025-05-31T00:00:00");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft("0 dias 00:00:00");
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
                const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

                setTimeLeft(`${days}  ${hours}:${minutes}:${seconds}`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main>

            <section className='principal'>
                <img src={ImagemTelaPequena} alt='Tela pequena' className='imgPequeno' />
                <img src={ImagemTelaTablet} alt='Tela media' className='imgTablet' />
                <img src={ImagemTelaGrande} alt='Tela media' className='imgMedia' />
            </section>
            <section className='contagemRegressiva'>
                <h2>CONTAGEM REGRESSIVA</h2>
                <div className='relogio'>
                    <p className='contagem'>{timeLeft}</p>
                    <div className='relogioInfo'>
                        <p>Dias</p><p>horas</p><p>min</p><p>seg</p>
                    </div>
                </div>
            </section>
            <section className='secundario'>

                <img src={SegundaImagemTelaPequena} alt='Tela pequena' className='SegundaImgPequeno' />
                <img src={SegundaImagemTelaTablet} alt='Tela tablet' className='SegundaImgTablet' />
                <div className='ContainerTexto'>
                    <Containerh1>SOBRE NÓS</Containerh1>
                    <ContainerParagrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</ContainerParagrafo>
                </div>
            </section>
        </main>
    );
}

export default Body;