import styled from "styled-components"
import Button from "../../components/Button"

const ContainerNotFound = styled.div`
color: var(--cor-primaria);
width: 50%;
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
h1,h2{
    color: #014166;
    text-align: center;
}

@media(max-width: 768px) {
    width: 80%;
h1,h2{
    font-size: 30px;
}
}
`



function NotFound() {
    function PagInicial() {
        window.location.href = "/"
    }
    return (
        <ContainerNotFound>
            <h1> Opss... Página nao encontrada</h1>
            <h2>Retorne para a página inicial do site clicando no botão abaixo</h2>
            <Button onClick={PagInicial} informacao="Voltar" />
        </ContainerNotFound>
    )
}

export default NotFound