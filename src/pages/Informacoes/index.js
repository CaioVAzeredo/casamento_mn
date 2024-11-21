import styled from 'styled-components'
import './estilo.css'
const ContainerInformacao = styled.div`
    h1{
        color: #014166;
        text-align: center;   
        font-size: 50px;
        margin: 35px 0px 0px 0px;
    } 
    hr{
        width: 300px;
        color: #014166;
        background-color: #014166;
        height: 1px;
        border: none;
    }
    h2{
        color: #F04A00;
    text-align: center;
}

p{
    text-align: center;
    font-size: 30px;
    color: #F04A00;
}
iframe{
    margin-left: 10% ;
    width: 80%;
    height: 400px;
    border: none;
    margin-bottom: 50px;
    margin-top: 25px;
}
@media(max-width: 768px) {

}

@media screen and (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (min-width: 1025px) {
    iframe {
    width: 800px;
    margin: 0px auto ;
    padding: 50px;
    border: none;
    display: block; 
}

}
`
function Informacoes() {
    return (
        <ContainerInformacao>
            <h1> Informações</h1>
            <hr />
            <h2>Horário</h2>
            <p>16:00h</p>
            <h2>Local</h2>
            <p>Rua 34 norte, lote 4, edifício Real Flat, salão de festas.</p>
            <iframe 
            title='Localização da festa'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3838.386220977436!2d-48.0363883972168!3d-15.8362855911255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3260ad014287%3A0x6457a7e8e689fdd4!2sCondom%C3%ADnio%20Real%20Flat!5e0!3m2!1spt-BR!2sbr!4v1732019265460!5m2!1spt-BR!2sbr">
            </iframe>
        </ContainerInformacao>
    )
}

export default Informacoes