import { useEffect, useState } from 'react';
import './estilo.css';
import ContainerPrincipal from '../../components/ContainerPrincipal';
import ContainerSecundario from '../../components/ContainerSecundario';
import styled from 'styled-components';
import ImgFundo from '../../components/ImgFundo';

const ContainerMain = styled.main`
@media screen and (min-width: 1260px) {

main {
    height: 1000px;
    width: 1000px;
    margin: 0 auto;
}
}`
const ImgFundoWrapper = styled.div`
display: block; /* Garante que fique visível */
width: 100%;
height: auto; /* Mantém a proporção da imagem */

@media (max-width: 768px) {
  display: none; /* Oculta em telas menores */
}
`;





function Body() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const diaDoCasamento = new Date("2025-05-31T16:30:00");

        setInterval(() => {
            const agora = new Date();
            const diferencaDeDias = diaDoCasamento - agora;

            if (diferencaDeDias <= 0) {
                setTimeLeft("0 0:00:00");
            } else {
                const dias = Math.floor(diferencaDeDias / (1000 * 60 * 60 * 24));
                const horas = String(Math.floor((diferencaDeDias / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutos = String(Math.floor((diferencaDeDias / (1000 * 60)) % 60)).padStart(2, '0');
                const segundos = String(Math.floor((diferencaDeDias / 1000) % 60)).padStart(2, '0');

                setTimeLeft(`${dias}  ${horas}:${minutos}:${segundos}`);
            }
        }, 1000);
    }, []);

    return (<>
        <ImgFundoWrapper>
            <ImgFundo />
        </ImgFundoWrapper>
        <ContainerMain>
            <ContainerPrincipal timer={timeLeft} />
            <ContainerSecundario />
        </ContainerMain>
    </>
    );
}

export default Body;