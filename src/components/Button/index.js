import styled from "styled-components"

const ContainerButton = styled.button`
font-family: "Poppins", sans-serif;
color: white;
margin-top: 20px ;
padding: 10px;
background-color: var(--cor-primaria);
border: none;
border-radius: 5px;
margin: 10px 20px;
cursor: pointer;

&:hover {
    background-color: #014166; 
    transform: scale(1.05); 
  }
`
function Button({onClick, type="text",informacao}) {
  return <ContainerButton onClick={onClick} type={type} > {informacao}</ContainerButton >
}

export default Button