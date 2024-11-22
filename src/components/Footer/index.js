import styled from 'styled-components'
import './estilo.css'

const ContainerFooter = styled.footer`
position: relative;
z-index: 2;
    height: 30px;
    background-color: var(--cor-primaria);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* Altere para a cor desejada */
    font-size: 20px; /* Ajuste o tamanho da fonte conforme necessário */
    p{
        color: white;
    }
    @media screen and (max-width: 768px) {
        margin-top: 100vh;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin-top: 105%;
    }
`

function Footer() {
    return (
        <ContainerFooter>
            <p> Desenvolvido por <a href="https://www.linkedin.com/in/caio-azeredo-dev/"> Caio VAzeredo</a> </p>
        </ContainerFooter>
    )
}

export default Footer