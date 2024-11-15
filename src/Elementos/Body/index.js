import { useEffect, useState } from 'react';
import ImagemTelaPequena from '../../Assets/imagens/tela-celular.png';
import ImagemTelaTablet from '../../Assets/imagens/tela-tablet.png';
import ImagemTelaGrande from '../../Assets/imagens/tela-grande.png';
import './estilo.css';

function Body() {
    const [timeLeft, setTimeLeft] = useState('0 dias 00:00:00');

    useEffect(() => {
        const targetDate = new Date("2025-05-31T00:00:00"); // Define a data e hora para a contagem regressiva

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
            </section>
        </main>
    );
}

export default Body;
