import styled from 'styled-components';
import Button from '../Button';
import { useState } from 'react';

const Overlay = styled.div`
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

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .line1,
  .line2 {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: var(--cor-primaria); /* Cor primária */
    border-radius: 2px;
  }

  .line1 {
    transform: rotate(45deg);
  }

  .line2 {
    transform: rotate(-45deg);
  }
`;

const ContainerWishList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
  height: 300px;
  text-align: center;
  background-color: white;
`;

const ContainerImg = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const ContainerModal = styled.div`
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

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
.botoes-doacao{
  display: flex;
  justify-content: center;
}
  }
`;

function WishList(props) {
  const [Modal, setModal] = useState(false);

  function statusModal() {
    setModal(!Modal);
  }

  function ClickForaDoModal(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }

  return (
    <>
      <ContainerWishList>
        <ContainerImg>
          <img src={props.img} alt={props.nome} />
        </ContainerImg>
        <h3>{props.nome}</h3>
        <p>R$ {props.preco.toFixed(2)}</p>
        <Button informacao="Presentear" onClick={statusModal} />
      </ContainerWishList>

      {Modal && (
        <Overlay onClick={ClickForaDoModal}>
          <ContainerModal>
            <CloseButton onClick={statusModal}>
              <div className="line1"></div>
              <div className="line2"></div>
            </CloseButton>
            <img src={props.img} alt={props.nome} />
            <h3>{props.nome}</h3>
            <p>R$ {props.preco.toFixed(2)}</p>
            <div className="botoes-doacao">
              <Button informacao="Presentear por pix" onClick={statusModal} />
              <Button informacao="Comprar pela Amazon" onClick={statusModal} />
            </div>
          </ContainerModal>
        </Overlay>
      )}
    </>
  );
}

export default WishList;
