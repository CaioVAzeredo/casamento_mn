import styled from "styled-components"
import Formulario from "../../components/Formulario"
import { useState } from "react"

const ContainerForm = styled.div`
    width: 100vw;
`

function ListaDePresenca() {

    const [arrayPresenca, setArrayPresenca] = useState([]);

    const AdicionarPresenca = (presenca) => {
        setArrayPresenca([...arrayPresenca, presenca])
        console.log(presenca);
    }

    return (
        <ContainerForm>
            <Formulario AdicionarPrenca={AdicionarPresenca} />
        </ContainerForm>
    )
}

export default ListaDePresenca