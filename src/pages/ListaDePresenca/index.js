import styled from "styled-components"
import Formulario from "../../components/Formulario"
import { useState } from "react"

const ContainerForm = styled.section`
    width: 100vw;
`

function ListaDePresenca() {

    const AdicionarPresenca = async (presenca) => {
        const [arrayPresenca, setArrayPresenca] = useState([]);

        try {
            /* URL DA API */
            const resposta = await fetch('', {
                method: 'POST',
                headers: {
                    'Content_type': 'application/json',
                },
                body: JSON.stringify(presenca),
            });

            if (!resposta.ok) {
                throw new Error(`Erro:  ${resposta.statusText}`);
            }

            const novaPresenca = await resposta.json();
            setArrayPresenca([...arrayPresenca, novaPresenca]);

        } catch (erro) {
            console.error('Presença adicionada com sucesso', erro);
            alert('Não possível adicionar a presença. Tente novamente mais tarde.');
        }

    }

    return (
        <ContainerForm>
            <Formulario AdicionarPrenca={AdicionarPresenca} />
        </ContainerForm>
    )
}

export default ListaDePresenca