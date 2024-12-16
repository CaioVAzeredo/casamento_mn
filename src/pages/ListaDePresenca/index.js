import styled from "styled-components"
import Formulario from "../../components/Formulario"
import { useNavigate } from "react-router-dom";

const ContainerForm = styled.section`
    width: 100vw;
`

function ListaDePresenca() {
    const navigate = useNavigate();
    const AdicionarPresenca = async (presenca) => {

        try {
            console.log("Enviando dados:", presenca);

            const resposta = await fetch('https://api-casamentomn.azurewebsites.net/api/Formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(presenca),
            });

            if (!resposta.ok) {
                alert("Não foi possível adicionar a presença. Tente novamente mais tarde.");
                console.error(`Erro: ${resposta.status} - ${resposta.statusText}`);
                return;
            }
            alert("Presença Confirmada!!")
            navigate("/pagina-de-sucesso");

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Não foi possível adicionar a presença. Tente novamente mais tarde.");
        }
    };


    return (
        <ContainerForm>
            <Formulario AdicionarPrensenca={AdicionarPresenca} />
        </ContainerForm>
    )
}

export default ListaDePresenca