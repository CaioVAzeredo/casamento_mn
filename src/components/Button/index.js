import styled from "styled-components"

const ContainerButton = styled.button`
font-family: "Poppins", sans-serif;
color: white;
margin-top: 20px ;
padding: 10px;
background-color: var(--cor-primaria);
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #014166; 
    transform: scale(1.05); 
  }
`
function Button(props) {
    return <ContainerButton onClick={props.onClick}>{props.informacao}</ContainerButton>
}

export default Button