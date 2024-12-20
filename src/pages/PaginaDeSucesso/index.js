import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgFundo from "../../components/ImgFundo";

const ContainerSucesso = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    text-align: center;
    color: #014166;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 40px;
    }

    a {
        text-decoration: none;
        color: #fff;
        background-color: var(--cor-primaria);
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;

        &:hover {
    background-color: #014166;
  }

    }
    @media(max-width: 768px) {
        margin: 0 auto;
    width: 90%;
        h1{
            font-size: 23px;
        }
        p{
            font-size: 20px;
        }
}
`;

function PaginaDeSucesso() {
    return (
        <>
        <ImgFundo/>
        <ContainerSucesso>
            <h1>🎉 Presença Confirmada! 🎉</h1>
            <p>Obrigado por confirmar sua presença. Estamos ansiosos para celebrar este momento especial com você!</p>
            <Link to="/">Voltar para a Página Inicial</Link>
        </ContainerSucesso>
        </>
    );
}

export default PaginaDeSucesso;
