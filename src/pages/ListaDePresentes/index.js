import styled from "styled-components"
import WishList from "../../components/WishList"
import ContainerH1 from "../../components/ContainerH1";

const SectionPresente = styled.section`
margin-bottom: 500px;
`;

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
        },
        // Novos produtos adicionados:
        {
            nome: "Conjunto de 6 Pratos Rasos Orgânico Preto",
            preco: 225.99,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/conjunto-seis-pratos.png"
        },
        {
            nome: "Torradeira Electrolux com 8 níveis",
            preco: 148.45,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/torradeira-tostador.png"
        },
        {
            nome: "Chaleira de Vidro Transparente 800ml",
            preco: 81.36,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/chaleira-de-vidro-lyor.png"
        },
        {
            nome: "Grill Brinox Ceramic 24x24cm",
            preco: 87.21,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/brinox-grill.png"
        },
        {
            nome: "Wok com Tampa Brinox Ceramic",
            preco: 164.40,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/brinox-work-com-tampa.png"
        },
        {
            nome: "Edredom Casal Queen Branco 100% Algodão",
            preco: 212.49,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/edredom-casal-queen-branco.png"
        },
        {
            nome: "Jogo de Lençol Casal Algodão Azul",
            preco: 121.99,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/jogo-lençol-casal-azul.png"
        },
        {
            nome: "Mesa Escrivaninha Retro Madeira",
            preco: 585.51,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/mesa-escrivaninha.png"
        },
        {
            nome: "Banquinho Madeira Demolição Decoração",
            preco: 449.00,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/banquinho-madeira.png"
        },
        {
            nome: "Bifeira Alta Grelhada de Ferro Fundido - Santana",
            preco: 71.25,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/bifeteira-alta.png"
        },
        {
            nome: "Cafeteira Elétrica Dolce Arome Digital, Mondial",
            preco: 189.75,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/cafeteira-eletrica.png"
        },
        {
            nome: "Colcha Bouti Cobre Leito Tecido Liso Rose",
            preco: 156.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/colcha-bouti-cobre-leito.png"
        },
        {
            nome: "Conjunto de Talheres Preto 24 Peças",
            preco: 139.00,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/conjunto-de-talheres-de-preto.png"
        },
        {
            nome: "Coup (Jogo de Cartas)",
            preco: 104.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/coup.png"
        },
        {
            nome: "Depurador Slim Philco Cinza",
            preco: 499.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/depurador.png"
        },
        {
            nome: "Echo Dot 5ª Geração (Preto)",
            preco: 280.31,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/echo-dot-5.png"
        },
        {
            nome: "Edredom Casal 200 Fios Algodão Avulso (Azul)",
            preco: 139.99,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/Edredom-casal-algodao.png"
        },
        {
            nome: "Exploding Kittens (Jogo de Cartas)",
            preco: 74.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/jogos-de-cartas-para-amigos.png"
        },
        {
            nome: "Jogo de Toalhas Algodão Azul e Rosa (Kit 4 Peças)",
            preco: 149.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/jogo-de-toalhas-algodao.png"
        },
        {
            nome: "Kit com Suporte para Shampoo e Banheiro",
            preco: 129.97,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/kit-com-suporte.png"
        },
        {
            nome: "Lampada Smart Wi-Fi Positivo RGB",
            preco: 37.90,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/lampada-smart.png"
        },
        {
            nome: "Porto Brasil Prato Fundo Orgânico Preto Matte",
            preco: 159.24,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/porto-brasil-fundo-organico.png"
        },
        {
            nome: "Porto Brasil Prato Sobremesa Preto Matte",
            preco: 185.34,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/porto-brasil-prato-sobremesa.png"
        },
        {
            nome: "The Resistance (Jogo de Cartas)",
            preco: 149.99,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/galapagos.png"
        },
        {
            nome: "Tramontina Panela de Pressão Vancouver 4,5L",
            preco: 159.85,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/tramontina-vancouver.png"
        },
        {
            nome: "Lyor Faqueiro de Aço Inox Dourado 24 Peças",
            preco: 119.61,
            imagem: "https://raw.githubusercontent.com/CaioVAzeredo/fotosCasamentoMN/main/lyor-faqueiro-de-aço-inox.png"
        }
    ];
    

    return (
        <SectionPresente>
            <ContainerH1 conteudo = 'Lista de presentes'/>
            <DivPresentes>
                {presentes.map(presente => <WishList nome={presente.nome} preco={presente.preco} img={presente.imagem} />)}
            </DivPresentes>
        </SectionPresente>
    )
};

export default ListaDePresentes;