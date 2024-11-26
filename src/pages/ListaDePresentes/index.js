import styled from "styled-components"
import WishList from "../../components/WishList"

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
display: flex;
`
function ListaDePresentes() {
    const presentes = [
        {
            nome: "Camiseta Básica",
            preco: 49.99,
            imagem: "https://example.com/imagens/camiseta-basica.jpg"
        },
        {
            nome: "Tênis Esportivo",
            preco: 199.99,
            imagem: "https://example.com/imagens/tenis-esportivo.jpg"
        },
        {
            nome: "Relógio Digital",
            preco: 149.99,
            imagem: "https://example.com/imagens/relogio-digital.jpg"
        },
        {
            nome: "Fone de Ouvido",
            preco: 89.99,
            imagem: "https://example.com/imagens/fone-ouvido.jpg"
        },
        {
            nome: "Mochila Escolar",
            preco: 79.99,
            imagem: "https://example.com/imagens/mochila-escolar.jpg"
        }, 
        {
            nome: "Camiseta Básica",
            preco: 49.99,
            imagem: "https://example.com/imagens/camiseta-basica.jpg"
        },
        {
            nome: "Tênis Esportivo",
            preco: 199.99,
            imagem: "https://example.com/imagens/tenis-esportivo.jpg"
        },
        {
            nome: "Relógio Digital",
            preco: 149.99,
            imagem: "https://example.com/imagens/relogio-digital.jpg"
        },
        {
            nome: "Fone de Ouvido",
            preco: 89.99,
            imagem: "https://example.com/imagens/fone-ouvido.jpg"
        },
        {
            nome: "Mochila Escolar",
            preco: 79.99,
            imagem: "https://example.com/imagens/mochila-escolar.jpg"
        }, {
            nome: "Camiseta Básica",
            preco: 49.99,
            imagem: "https://example.com/imagens/camiseta-basica.jpg"
        },
        {
            nome: "Tênis Esportivo",
            preco: 199.99,
            imagem: "https://example.com/imagens/tenis-esportivo.jpg"
        },
        {
            nome: "Relógio Digital",
            preco: 149.99,
            imagem: "https://example.com/imagens/relogio-digital.jpg"
        },
        {
            nome: "Fone de Ouvido",
            preco: 89.99,
            imagem: "https://example.com/imagens/fone-ouvido.jpg"
        },
        {
            nome: "Mochila Escolar",
            preco: 79.99,
            imagem: "https://example.com/imagens/mochila-escolar.jpg"
        }
    ];

    return (
        <section>
            <ContainerDiv>
                <h1> Lista de presentes</h1>
                <hr />
            </ContainerDiv>
            <DivPresentes>
            {presentes.map(presente => <WishList nome={presente.nome} preco = {presente.preco} img = {presente.imagem}/>)}
            </DivPresentes>
        </section>
    )
}

export default ListaDePresentes