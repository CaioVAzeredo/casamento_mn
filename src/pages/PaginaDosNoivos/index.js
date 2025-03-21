import { useState, useEffect } from "react";
import styled from "styled-components";
import ContainerH1 from "../../components/ContainerH1";
import ImgFundo from "../../components/ImgFundo";

const ConainerFora = styled.div`
padding-bottom: 30px;
.msgError{
  width: 800px;
  text-align: center;
  margin: 100px auto;
}
`

const ContainerPresenca = styled.div`
background-color: white;
width: 600px;
margin: 10px auto;
padding: 10px;
border-radius: 10px;

@media(max-width: 600px) {
    width: 80%;

}
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
                const resposta = await fetch('https://api-casamento-bsaphxatfjaxgvgt.canadaeast-01.azurewebsites.net/api/formulario');
                if (!resposta.ok) {
                    throw new Error(`Erro ao buscar lista de presença: ${resposta.statusText}`);
                }
                const dados = await resposta.json();
                setList(dados);
            } catch (erro) {
                setErro("Informações indisponíveis no momento.. Procure o suporte!");
                console.error("Erro ao buscar dados:", erro);
            } finally {
                setLoading(false);
            }
        }
        fetchList();
    }, []);

    if (loading) {
        return <Carregamento>
            <p>Carregando informações...</p>
        </Carregamento>
    }

    return (<>
        <ImgFundo />
        <ContainerH1 conteudo="Lista de presença" />
        <ConainerFora>
        {erro && <div className="msgError">Erro ao carregar a pagina..</div>}
            {listPresenca.map(
                presenca => <ContainerPresenca>
                    <div >
                        <p><strong>Nome:</strong></p>
                        {presenca.nome}
                    </div>
                    <div>
                        <p><strong>Vai ao casamento?</strong></p>
                        {presenca.resposta}
                    </div>
                    <div>
                        <p><strong>Presença de mais alguém?</strong></p>
                        {presenca.convidado ? presenca.convidado : "Sem Informação"}
                    </div>
                    <div className="divMsg">
                        <p><strong>Mensagem aos noivos:</strong></p>
                        {presenca.mensagem ? presenca.mensagem : "Sem Informação"}
                    </div>
                </ContainerPresenca>
            )}
        </ConainerFora>

    </>
    )
}

export default PaginaDosNoivos;