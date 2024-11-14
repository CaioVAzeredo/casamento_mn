import './App.css';
import styled from 'styled-components';
import Header from './Elementos/Header';
import Body from './Elementos/Body';

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  );
}

export default App;
