import { useState, useEffect } from "react";
import styled from "styled-components";
import ContainerH1 from "../../components/ContainerH1";

const ContainerPresenca = styled.div`
background-color: white;
width: 600px;
margin: 10px auto;
padding: 10px;
border-radius: 10px;
`
const Carregamento = styled.div`
height: 100vh;
width: 100vw;
margin: 0 auto;

p{
  padding-top: 350px;
  font-size: 50px;
  text-align: center;
  
}
`;

function PaginaDosNoivos() {
    const [listPresenca, setList] = useState([]);
    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const resposta = await fetch('https://api-casamentomn.azurewebsites.net/api/Formulario');
                if (!resposta.ok) {
                    throw new Error(`Erro ao buscar lista de presença: ${resposta.statusText}`);
                }
                const dados = await resposta.json();
                setList(dados);
            } catch (erro) {
                setErro("Informações indisponíveis no momento.. Procure o suporte!");
                console.error("Erro ao buscar dados:", erro);
            } finally{
                setLoading(false);
            }
        }
        fetchList();
    }, []);

    if(loading){
        return <Carregamento>
        <p>Carregando informações...</p>
      </Carregamento>
    }

    return (<>

        <ContainerH1 conteudo="Lista de presença" />
    {erro && <div>Erro ao carregar a pagina..</div>}
        {listPresenca.map(
            presenca => <ContainerPresenca>
                nome: {presenca.nome};
                vai ao casamento? {presenca.resposta}
                Presença de mais alguém? {presenca.convidado}
                Mensagem aos noivos: {presenca.mensagem}
            </ContainerPresenca>
        )}
    </>
    )
}

export default PaginaDosNoivos;