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
    text-align: center;
}

p{
    text-align: center;
    font-size: 30px;
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
    margin: 0 auto;
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
            <p>00:00:00</p>
            <h2>Local</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3838.391636369467!2d-48.03638316431995!3d-15.83600060987515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1731939243574!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </ContainerInformacao>
    )
}

export default Informacoes