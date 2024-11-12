import './App.css';
import styled from 'styled-components';
import Header from './Elementos/Header';

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #FFE0E4;
`
function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
