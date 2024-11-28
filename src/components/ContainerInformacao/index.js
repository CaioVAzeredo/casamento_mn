import styled from "styled-components";

const ContainerInformacaoDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);            
  margin: 0 auto;
  width: 80%;
  gap: 5px; 
  justify-items: center; 
  padding: 50px 0 ;

  .quando {
    background-color: black;
    width: 300px;
    height: 400px;
  }
  
  .onde {
    background-color: blue;
    width: 300px;
    height: 400px;
  }
  
  .vestes {
    background-color: red;
    width: 300px;
    height: 400px;
  }
h2{
  color: var(--cor-primaria);
  font-family: "Poppins", sans-serif;
}
p{
  text-align: center;
  color: var(--cor-primaria);
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  width: 200px;
  margin: 0 auto;
}

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    h2{
  margin: 0px;
}
p{
  margin-bottom: 40px;
}
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 2000px) {
    width: 1500px;
  }
`;

function ContainerInformacao(informacoesList) {
  return informacoesList.map(informacao => <div><div className={informacao.estilo}></div><h2>{informacao.info1}:</h2><p>{informacao.info2}</p></div>
  )
}

export default ContainerInformacao