import styled from "styled-components"
import WishList from "../../components/WishList"

const SectionPresente = styled.section`
margin-bottom: 500px;
`
const ContainerDiv = styled.div`

    h1 {
        text-align: center;
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

      @media(max-width: 768px) {
    }

@media screen and (min-width: 768px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}
`
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
    const presentes = [
        {
            nome: "Caixa de Chá Oceanstar TB1323, Bambu",
            preco: 118.93,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/caixa-de-cha.png"
        },
        {
            nome: "Cama Casal Multifuncional Madeira Maciça",
            preco: 2341.16,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/cama-casal-multifuncional.png"
        },
        {
            nome: "Jogo 3 Cestas Bandeja de Palha/Fibra",
            preco: 174.30,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/cestas-bandeija-de-palha.png"
        },
        {
            nome: "Chapa Sanduicheira de Fogão",
            preco: 56.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/chapa-sanduicheira-de-fogao.png"
        },
        {
            nome: "Jarra de Vidro Borossilicato 1,5L",
            preco: 67.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/jarra-de-vidro.png"
        },
        {
            nome: "Kit Bar Profissional Coqueteleira",
            preco: 159.99,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/kit-bar-profissional.png"
        },
        {
            nome: "Lixeira Suspensa de Pendurar Sem Furos",
            preco: 53.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/lixeira-suspensa.png"
        },
        {
            nome: "Manta Para Sofá 4 Lugares (Areia)",
            preco: 99.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/manta-para-sofa-areia.png"
        },
        {
            nome: "Manta Para Sofá (Cru)",
            preco: 99.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/manta-para-sofa-cru.png"
        },
        {
            nome: "Manta Para Sofá Karsten Grossa King Size",
            preco: 46.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/manta-para-sofa-karsten.png"
        },
        {
            nome: "Manteigueira Francesa Pedra Sabão",
            preco: 57.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/manteigueira-francesa.png"
        },
        {
            nome: "Toalheiro Porta Toalha de Mão",
            preco: 59.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/toalheiro-porta-toalha-de-mao.png"
        },
        {
            nome: "Kit 3 Cestos Organizadores de Palha",
            preco: 126.63,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/cestos-organizador-de-palha.png"
        }
    ];


    return (
        <SectionPresente>
            <ContainerDiv>
                <h1> Lista de presentes</h1>
                <hr />
            </ContainerDiv>
            <DivPresentes>
                {presentes.map(presente => <WishList nome={presente.nome} preco={presente.preco} img={presente.imagem} />)}
            </DivPresentes>
        </SectionPresente>
    )
}

export default ListaDePresentes