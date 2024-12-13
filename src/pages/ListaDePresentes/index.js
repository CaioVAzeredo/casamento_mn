import styled from "styled-components"

import WishList from "../../components/WishList"
import ContainerH1 from "../../components/ContainerH1";
import ArrayPresentes from "../../components/ArrayPresentes";
import { useEffect, useState } from "react";

const SectionPresente = styled.section`
margin-bottom: 500px;
`;

const DivPresentes = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px; 
  justify-items: center; 
  padding: 50px 0 ;
 
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1215px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 895px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 588px) {
    grid-template-columns: repeat(1, 1fr);
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
`;
function ListaDePresentes() {

  const [presentes, setPresentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentes = async () => {

      try {
        const resposta = await fetch('https://api-casamentomn.azurewebsites.net/api/Presente');
        if (!resposta.ok) {
          throw new Error(`Erro ao buscas lista de presentes: ${resposta.statusText}`);
        }
        const dados = await resposta.json();
        setPresentes(dados);
      } catch (erro) {
        console.error('Erro ao consumir API: ', erro);

        /* setPresentes(ArrayPresentes()); */
      } finally {
        setLoading(false)
      }
    }

    fetchPresentes();
  }, []);

  if (loading) {
    return <Carregamento>
      <p>Carregando informações...</p>
    </Carregamento>
  }

  return (
    <SectionPresente>
      <ContainerH1 conteudo='Lista de presentes' />
      <DivPresentes>
        {presentes.map(
          presente => <WishList
            nome={presente.nome}
            preco={presente.preco}
            img={presente.imagem}
            link={presente.link}
            pix={presente.pix}
            chave_pix={presente.chave_pix}
          />
        )}
      </DivPresentes>
    </SectionPresente>
  )
};

export default ListaDePresentes;