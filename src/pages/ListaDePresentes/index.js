import styled from "styled-components"
import WishList from "../../components/WishList"
import ContainerH1 from "../../components/ContainerH1";
import ArrayPresentes from "../../components/ArrayPresentes";

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

function ListaDePresentes() {
    const presentes = ArrayPresentes();

    return (
        <SectionPresente>
            <ContainerH1 conteudo = 'Lista de presentes'/>
            <DivPresentes>
                {presentes.map(presente => <WishList nome={presente.nome} preco={presente.preco} img={presente.imagem} />)}
            </DivPresentes>
        </SectionPresente>
    )
};

export default ListaDePresentes;