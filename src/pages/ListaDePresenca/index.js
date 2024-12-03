import styled from "styled-components"
import ContainerH1 from "../../components/ContainerH1"
import Campo from "../../components/Campo"
import { useState } from "react"

const ContainerForm = styled.form`
padding:2vh ;
height: 600px;
    width: 50%;
    margin: 0 auto;
`

function ListaDePresenca() {
    const [nome, setNome] = useState('')

    return (
        <ContainerForm>
            <ContainerH1 conteudo="Confirme sua presença" />

            <form>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
            </form>
        </ContainerForm>
    )
}

export default ListaDePresenca