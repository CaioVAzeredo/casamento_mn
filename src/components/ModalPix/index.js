import styled from "styled-components";
import CloseButton from "../CloseButton";

const ContainerForaDoModalPix = styled.div`
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

const ContainerModalPix = styled.div`
 position: relative;
  width: 50%;
  height: 95%;
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
    color: #555;
  }
.botoes-doacao{
  margin: 0 auto;
}
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    .botoes-doacao{
      width: 180px;
      padding: 10px;
      margin: 0 auto;
    }
  }
`
function ModalPix({ onClickForaDoModal, onClickStatusModal, imgPix, nomeProduto, preco, chavePix }) {
  return (
    <ContainerForaDoModalPix onClick={onClickForaDoModal}>
      <ContainerModalPix>
        <CloseButton onClick={onClickStatusModal} />
        <img src={imgPix} alt={nomeProduto} />
        <p>R$ {preco}</p>
        <p>Chave pix: {chavePix}</p>
      </ContainerModalPix>
    </ContainerForaDoModalPix>
  )
}
export default ModalPix