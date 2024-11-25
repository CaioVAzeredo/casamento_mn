import styled from 'styled-components'
import ImgInfo from '../../Assets/imagens/img_matheusENadyrPgInformacoes.png'
const ContainerInformacao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 850px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .Infos {
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      color: #014166;
      font-size: 50px;
      margin: 35px 0px 0px 0px;
    }

    hr {
      width: 300px;
      color: #014166;
      background-color: #014166;
      height: 1px;
      border: none;
      margin: 20px auto;
    }

    h2 {
      color: #F04A00;
      margin-top: 20px;
    }

    p {
      font-size: 30px;
      color: #F04A00;
      margin: 10px 0;
    }

    iframe {
      width: 100%;
      height: 400px;
      border: none;
      margin-top: 25px;
    }
  }

  .foto {
    flex: 1; 
    height:904px; 
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: auto;
      height: 100%; 
      object-fit: cover; 
    }
  }

  @media (max-width: 768px){
    .foto{
        display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1230px) {
    .foto{
        display: none;
    }

    .content {
      flex-direction: column;
      align-items: center;
    }

  }

  @media (min-width: 2000px){
    .content{
        width: 2000px;
    }
  }
`;


function Informacoes() {
    return (
      <ContainerInformacao>
        <div className="content">
          <div className="Infos">
            <h1>Informações</h1>
            <hr />
            <h2>Horário:</h2>
            <p>16:00h</p>
            <h2>Local:</h2>
            <p>Rua 34 norte, lote 4, edifício Real Flat, salão de festas.</p>
            <iframe
              title="Localização da festa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3838.386220977436!2d-48.0363883972168!3d-15.8362855911255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3260ad014287%3A0x6457a7e8e689fdd4!2sCondom%C3%ADnio%20Real%20Flat!5e0!3m2!1spt-BR!2sbr!4v1732019265460!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
          <div className="foto">
            <img src={ImgInfo} alt="Imagem Matheus e Nadyr" />
          </div>
        </div>
      </ContainerInformacao>
    );
  }
  
  export default Informacoes;
  