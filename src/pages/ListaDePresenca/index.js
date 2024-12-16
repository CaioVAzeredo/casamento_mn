import styled from "styled-components"
import Formulario from "../../components/Formulario"

const ContainerForm = styled.section`
    width: 100vw;
`

function ListaDePresenca() {

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
                console.error(`Erro: ${resposta.status} - ${resposta.statusText}`);
                return;
            }
    
            console.log("Presença adicionada com sucesso!");
            const resultado = await resposta.json();
            console.log("Resposta da API:", resultado);
    
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Não foi possível adicionar a presença. Tente novamente mais tarde.");
        }
    };
    

    return (
        <ContainerForm>
            <Formulario AdicionarPrensenca ={AdicionarPresenca} />
        </ContainerForm>
    )
}

export default ListaDePresenca