import styled from "styled-components";
import CloseButton from "../CloseButton";
import Button from "../Button";
import { useState } from "react";

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
  }

  p {
    font-size: 25px;
    text-align: center;
  }
  .popup {
    text-align: center;
            display: block;
            position: absolute;
            top: 85%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #000;
            background-color: var(--dark-blue-color);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {

        }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    .popup{
      top: 92%;
      width: 300px;
    }
    img{
      width: 200px;
    }
  }
`
function ModalPix({ onClickForaDoModal, onClickStatusModal, imgPix, nomeProduto, preco, chave_pix }) {
  const [mostrarPopup, setMostarPopup] = useState(false)
  const chavePix = "030e3169-86f1-41d8-8c54-c8014a7ef538";

  function copiarChave() {
    navigator.clipboard.writeText(chavePix)
      .then(() => {
        setMostarPopup(true);
        setTimeout(() => {
          setMostarPopup(false);
        }, 5000)

      })
      .catch(error => {
        alert("Nao foi possível copiar a chave Pix!")
        console.log(error)
      });
  }
  return (
    <ContainerForaDoModalPix onClick={onClickForaDoModal}>
      <ContainerModalPix>
        <CloseButton onClick={onClickStatusModal} />
        <img src={imgPix} alt={nomeProduto} />
        <p>R$ {preco}</p>
        <h3>Chave pix: </h3>
        <p>{chave_pix}</p>
        <Button onClick={copiarChave} informacao="Copiar chave pix" />
        {mostrarPopup && (<div className="popup">Chave Pix copiada para a área de transferência!</div>)}
      </ContainerModalPix>
    </ContainerForaDoModalPix>
  );
}
export default ModalPix