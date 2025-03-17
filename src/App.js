import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Informacoes from './pages/Informacoes';
import ListaDePresentes from './pages/ListaDePresentes';
import PaginaDeSucesso from './pages/PaginaDeSucesso';
import ListaDePresenca from './pages/ListaDePresenca';
import PaginaDosNoivos from './pages/PaginaDosNoivos';
import NotFound from './pages/notFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 2; /* Camada superior ao ContainerDiv */
    position: relative; /* Necessário para respeitar o z-index */
`;


function App() {
    return (
        <Router>
            
            <AppContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/informacoes" element={<Informacoes />} />
                    <Route path="/lista-de-presentes" element={<ListaDePresentes />} />
                    <Route path="/lista-de-presenca" element={<ListaDePresenca />} />
                    <Route path="/pagina-de-sucesso" element={<PaginaDeSucesso />} />
                    <Route path="/pagina-dos-noivos" element={<PaginaDosNoivos />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;
