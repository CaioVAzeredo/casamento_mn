import styled from "styled-components";
import './estilo.css'
import imagemLogo from '../../Assets/imagens/LogoMN.png'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #F04A00;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    position: relative; 
    z-index: 10;
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
                <Link to="/"><img src={imagemLogo} alt="Foto" className="logo" onClick={alternaMenu}/></Link>
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
                        <li><Link to="/" onClick={alternaMenu}>Home</Link></li>
                        <li><Link to="/informacoes" onClick={alternaMenu}>Informações</Link></li>
                        <li><Link to="/lista-de-presentes" onClick={alternaMenu}>Lista de presentes</Link></li>
                        <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSd6m4HR6Rh5m-niA92uHhqGqeE_e6A1cG79SyGpmmki_VqxqQ/viewform">Confirmar presença</Link></li>
                <div className="EspacoEmBranco" onClick={alternaMenu}>

                </div>
                    </ul>
                )}
            </nav>

        </HeaderContainer>
    );
}

export default Header;