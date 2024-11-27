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

    const opcoes = [
        {
            Link: '/',
            Pagina: 'Home'
        },
        {
            Link: '/informacoes',
            Pagina: 'Informações'
        },
        {
            Link: '/lista-de-presentes',
            Pagina: 'Lista de presentes'
        },
        {
            Link: 'https://docs.google.com/forms/d/e/1FAIpQLSd6m4HR6Rh5m-niA92uHhqGqeE_e6A1cG79SyGpmmki_VqxqQ/viewform',
            Pagina: 'Confirmar presença'
        }
    ]
    return (
        <HeaderContainer>
            <nav>
                <Link to="/"><img src={imagemLogo} alt="Foto" className="logo" /></Link>
                <div
                    onClick={alternaMenu}
                    className={`mobile-menu ${isOpen ? 'open' : ''}`}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {(isDesktop || isOpen) && ( <ul className="nav-list">{opcoes.map(opcao => <li><Link to={opcao.Link} onClick={alternaMenu}>{opcao.Pagina}</Link></li>)}</ul>)}
            </nav>
        </HeaderContainer >
    );
}

export default Header;