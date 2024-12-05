import styled from 'styled-components';

import ContainerH1 from '../../components/ContainerH1';
import Arrayinformacoes from '../../components/ArrayInformacoes';
import ContainerInformacao from '../../components/ContainerInformacao';
import { useEffect, useState } from 'react';

const ContainerInformacaoDiv = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);            
  margin: 0 auto;
  width: 80%;
  gap: 5px; 
  justify-items: center; 
  padding: 50px 0 ;

  @media(max-width: 1603px) {
    
}
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 2000px) {
    width: 1500px;
  }
`;
const Carregamento = styled.div`
height: 100vh;
width: 100vw;
margin: 0 auto;

p{
  padding-top: 350px;
  font-size: 50px;
  text-align: center;
  
}
`

function Informacoes() {

  const [informacoesList, setInformacoesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInformacoes = async () => {

      try {
        const resposta = await fetch(''); 

        if (!resposta.ok) {
          throw new Error(`Erro ao buscar informações: ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        setInformacoesList(dados);

      } catch (erro) {
        console.log('Erro ao buscar informações: ', erro)

        setInformacoesList(Arrayinformacoes());
      } finally {
        setLoading(false);
      }
    }

    fetchInformacoes();
  }, []);

  if (loading) {
    return <Carregamento>
      <p>Carregando informações...</p>
    </Carregamento>
  }

  return (
    <>
      <ContainerH1 conteudo="Seja testemunha do nosso dia especial" />

      <ContainerInformacaoDiv>
        <ContainerInformacao informacoes={informacoesList} />
      </ContainerInformacaoDiv>
    </>
  );

}

export default Informacoes;