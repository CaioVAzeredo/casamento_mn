import styled from 'styled-components';
import { useState } from 'react';
import ModalProduto from '../ModalProduto';
import Button from '../Button';



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

function WishList(props) {
  const [Modal, setModal] = useState(false);
  const [ModalPix, setModalPix] = useState(false);

  function statusModal() {
    setModal(!Modal);
  }
  function statusModalPix() {
    setModalPix(!ModalPix);
  }

  function ClickForaDoModal(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  function ClickForaDoModalPix(e) {
    if (e.target === e.currentTarget) {
      setModalPix(false);
    }
  }
  function ClickAmazon() {
    window.location.href = "https://www.amazon.com.br/hz/wishlist/ls/1YJB1CH3PNW96?ref_=wl_share"
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

      {Modal && (<>
        <ModalProduto
          onClickForaDoModal={ClickForaDoModal}
          onClickStatusModal={statusModal}
          onClickStatusModalPix={statusModalPix}
          onClickAmazon={ClickAmazon}
          img={props.img}
          nome={props.nome}
          preco={props.preco.toFixed(2)}
        />
      </>
      )}
      {ModalPix && (
        <ModalPix
          onClickForaDoModal={ClickForaDoModalPix}
          onClickStatusModal={statusModalPix}
          imgPix={props.pix}
          nomeProduto={props.nome}
          preco={props.preco.toFixed(2)}
          chavePix={props.chavePix}
        />

      )}
    </>
  );
}

export default WishList;
