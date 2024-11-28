import styled from "styled-components"

const H1Estilizado = styled.div`
h1{
    color: var(--dark-blue-color);
    width: 500px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin: 0 auto;
    padding: 50px 0 0 0;
    font-size: 40px;    
}

  hr {
        width: 500px;
        color: #014166;
        background-color: #014166;
        height: 1px;
        border: none;
        margin: 20px auto;
      }
      @media(max-width: 768px) {
h1, hr{
    width: 80%;
    font-size: 30px;
}

      }
`

function ContainerH1(props) {
    return <H1Estilizado>
        <h1>{props.conteudo}</h1>
        <hr />
    </H1Estilizado>
}

export default ContainerH1