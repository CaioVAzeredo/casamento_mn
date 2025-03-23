import styled from "styled-components"

import WishList from "../../components/WishList"
import ContainerH1 from "../../components/ContainerH1";
import ArrayPresentes from "../../components/ArrayPresentes";
import { useEffect, useState } from "react";
import ImgFundo from "../../components/ImgFundo";
import Button from "../../components/Button";

const SectionPresente = styled.section`
.texto-presente{
    color: #014166;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    font-size: 17px;
}
margin-bottom: 500px;

.botaoAmazon{
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
@media screen and (max-width: 750px) {
  .texto-presente{
width: 60%;
}
  }
  @media screen and (max-width: 750px) {
  .texto-presente{
    font-size: 20px;
}
  }
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

function ListaDePresentes() {

  const [presentes, setPresentes] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPresentes = async () => {

      try {
        const resposta = await fetch('');
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

  function ClickAmazon() {
    window.location.href = `https://www.amazon.com.br/hz/wishlist/ls/1YJB1CH3PNW96?ref=cm_sw_wa_r_un_un_dXMXnZK98UMT7`
  }
  return (
    <>
      <ImgFundo />
      <SectionPresente>
        <ContainerH1 conteudo='Lista de presentes' />
        <h3 className="texto-presente"> O melhor presente que podemos receber é a presença de vocês nesse dia especial, mas caso ainda queiram deixar uma lembrança para o casal, aqui temos uma lista de sugestões de coisas que precisamos e queremos.</h3>
        <div className="botaoAmazon">
          <Button informacao="Presentear pela Amazon" onClick={ClickAmazon} />
        </div>
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