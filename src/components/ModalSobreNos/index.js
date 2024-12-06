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
  width: 45%;
  height: 75%;
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
.botoes-doacao{
  margin: 0 auto;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 55%;
  height: 75%;
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
`;

function ModalProduto({ onClickForaDoModal, onClickStatusModal }) {

  return (<ContainerForaDoModal onClick={onClickForaDoModal}>
    <ContainerModal>
      <CloseButton onClick={onClickStatusModal} />
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum...
      </p>
    </ContainerModal>
  </ContainerForaDoModal>)
}

export default ModalProduto