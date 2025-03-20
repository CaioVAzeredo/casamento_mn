import styled from "styled-components"

import WishList from "../../components/WishList"
import ContainerH1 from "../../components/ContainerH1";
import ArrayPresentes from "../../components/ArrayPresentes";
import { useEffect, useState } from "react";
import ImgFundo from "../../components/ImgFundo";

const SectionPresente = styled.section`
margin-bottom: 500px;
.msgError{
  width: 800px;
  text-align: center;
  margin: 100px auto;
}
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
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPresentes = async () => {

      try {
        const resposta = await fetch('https://localhost:7169/api/Presente');
        if (!resposta.ok) {
          throw new Error(`Erro ao buscas lista de presentes: ${resposta.statusText}`);
        }
        const dados = await resposta.json();
        setPresentes(dados);
      } catch (erro) {
        setErro("Informações indisponíveis no momento.. Procure o suporte!");
        console.error("Erro ao buscar dados:", erro);
        setPresentes(ArrayPresentes())
      } finally {
        setLoading(false)
      }
    }

    fetchPresentes();
  }, []);

  return (
    <>
      <ImgFundo />
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
    </>
  )
};

export default ListaDePresentes;