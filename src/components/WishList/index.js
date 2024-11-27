import styled from 'styled-components';
import Button from '../Button';
import { useState } from 'react';

const ContainerWishList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px; /* Define a largura fixa */
  height: 300px; /* Define a altura fixa */
  text-align: center;
  background-color: white;
  
`;

const ContainerImg = styled.div`
  width: 100%; /* A largura da div acompanha o Container */
  height: 150px; /* Altura fixa da div que conterá a imagem */
  overflow: hidden; /* Esconde partes da imagem que ultrapassem a div */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz com que a imagem preencha a área sem distorcer */
    border-radius: 5px; /* Mantém o arredondamento nos cantos */
  }
`;
const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

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
`;

function WishList(props) {
    const [Modal, setModal] = useState(false)

    function statusModal() {
        setModal(!Modal)
    }

    return (
        <>
            <ContainerWishList>
                <ContainerImg>
                    <img src={props.img} alt={props.nome} />
                </ContainerImg>
                <h3>{props.nome}</h3>
                <p>R$ {props.preco.toFixed(2)}</p>
                <Button informacao='Presentear' onClick={statusModal} />
            </ContainerWishList>

            {(Modal) && (<ContainerModal>
                <img src={props.img} alt={props.nome} />
                <h3>{props.nome}</h3>
                <p>R$ {props.preco.toFixed(2)}</p>
                <Button informacao='Fechar' onClick={statusModal} />
            </ContainerModal>)}
        </>
    );
}

export default WishList;
