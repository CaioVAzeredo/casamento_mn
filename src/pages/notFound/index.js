import styled from "styled-components"

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
p{
    background-color: black;
}
`
const ButtonVoltar = styled.button`
 background-color: var(--cor-primaria);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5%;

  &:hover{
    background-color: #014166; 
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
            <ButtonVoltar onClick={PagInicial}>
                Voltar
            </ButtonVoltar>
        </ContainerNotFound>
    )
}

export default NotFound