import styled from 'styled-components'
const ContainerWishList = styled.div`
margin: 0 auto;
`


function WishList(props) {

    return <ContainerWishList>
        {props.nome} {props.preco}
        </ContainerWishList>

}

export default WishList