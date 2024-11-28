import { useEffect, useState } from 'react';

import './estilo.css';

import ContainerPrincipal from '../../components/ContainerPrincipal';
import ContainerSecundario from '../../components/ContainerSecundario';
import styled from 'styled-components';

const ContainerMain = styled.main`
@media screen and (min-width: 1025px) {

main {
    height: 1000px;
    width: 1000px;
    margin: 0 auto;
}
}`

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
        <ContainerMain>
            <ContainerPrincipal timer={timeLeft} />
            <ContainerSecundario />
        </ContainerMain>
    );
}

export default Body;