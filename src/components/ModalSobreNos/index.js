import styled from "styled-components";
import CloseButton from "../CloseButton";

const ContainerForaDoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ContainerModal = styled.div`
 position: relative;
  width: 35%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border-radius: 10px;

  img {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 18px;
  }
  p:first-of-type,
  p:nth-of-type(2) {
    text-indent: 20px; 
   
}

p.margem-superior {
    margin-top: 20px;
  }

.botoes-doacao{
  margin: 0 auto;
}
@media screen and (min-width: 948px) and (max-width: 1414px) {
  width: 55%;
  height: 75%;
}

  @media (max-width: 948px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    .botoes-doacao{
      width: 180px;
      padding: 10px;
      margin: 0 auto;
    }
  }
`;
const Texto = styled.div`
padding: 100px;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;

    p{
      padding: 10px;
    }
  }
`
function ModalProduto({ onClickForaDoModal, onClickStatusModal }) {

  return (<ContainerForaDoModal onClick={onClickForaDoModal}>
    <ContainerModal>
      <CloseButton onClick={onClickStatusModal} />
      <Texto>

        <p>
          Dois conhecidos que se aproximaram por acaso. A gente se encontrava em um churrasco, um barzinho, uma festa junina de igreja, até que, em uma festa, eu pedi um beijo pra ela e ela recusou 😥.  Mas logo ela viu a besteira que tinha feito e voltou correndo pra mim. Desde então, nunca nos separamos. Começamos a sair e eu logo admiti estar apaixonado, ao que ela respondeu com um teimoso "não tá, não", mas no fundo ela sabia que tanto eu quanto ela estávamos.
        </p>
        <p>
          Nosso namoro começou na cafeteria preferida dela, e exatamente dois anos depois do nosso primeiro beijo eu derreti o coração dela com meu romantismo ao pedi-la em casamento. Hoje estamos ansiosos para celebrar nossa união ao lado de vocês, numa festa cheia de amor, alegria e o aconchego do pôr do sol.
        </p>
        <p className="margem-superior">
          Nos vemos dia 31 de maio de 2025!
        </p>

        <p className="margem-superior">
          Com muito amor,
          Matheus & Nadyr
        </p>
      </Texto>
    </ContainerModal>
  </ContainerForaDoModal>)
}

export default ModalProduto