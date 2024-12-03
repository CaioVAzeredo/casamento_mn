import styled from "styled-components"
import Formulario from "../../components/Formulario"

const ContainerForm = styled.div`
padding:2vh ;
height: 600px;
    width: 50%;
    margin: 0 auto;
`

function ListaDePresenca() {

    return (
        <ContainerForm>
            <Formulario />
        </ContainerForm>
    )
}

export default ListaDePresenca