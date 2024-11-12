import styled from "styled-components";
import './estilo.css'
import imagemLogo from '../../Assets/imagens/LogoMN.png'

const HeaderContainer = styled.header`
    background-color: #F04A00;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    
`

function Header() {
    return (
        <HeaderContainer>

            <nav>
                <img src={imagemLogo} alt="Foto" className="logo" />
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-list">
                    <li><a>Home</a></li>
                    <li><a>Informações</a></li>
                    <li><a>Lista de presentes</a></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header