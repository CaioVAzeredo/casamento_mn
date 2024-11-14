import styled from "styled-components";
import './estilo.css'
import imagemLogo from '../../Assets/imagens/LogoMN.png'
import { useState, useEffect } from "react";

const HeaderContainer = styled.header`
    background-color: #F04A00;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
`;

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const alternaMenu = () => {
        if (!isDesktop) {
            setIsOpen(!isOpen);
        }
    };

    const tela = () => {
        setIsDesktop(window.innerWidth >= 768);
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', tela);
    
        tela();

        return () => window.removeEventListener('resize', tela);
    }, []);

    return (
        <HeaderContainer>
            <nav>
                <img src={imagemLogo} alt="Foto" className="logo" />
                <div 
                    onClick={alternaMenu}  
                    className={`mobile-menu ${isOpen ? 'open' : ''}`}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {(isDesktop || isOpen) && (
                    <ul className="nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Informações</a></li>
                        <li><a href="#">Lista de presentes</a></li>
                    </ul>
                )}
            </nav>
        </HeaderContainer>
    );
}

export default Header;
