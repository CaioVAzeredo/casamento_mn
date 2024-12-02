import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Informacoes from './pages/Informacoes';
import ListaDePresentes from './pages/ListaDePresentes';
import NotFound from './pages/notFound';
import ListaDePresenca from './pages/ListaDePresenca';

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
`
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
