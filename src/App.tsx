import Header from './components/Header';
import ViewMore from './components/molecules/ViewMore';
import Main from './components/templates/Main';
import styled from 'styled-components';
import Home from './components/templates/Home';
function App() {
  return (
    <Container className='App'>
      <Header />
      <Home />
      <Main />
      <Main />
      <Main />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div``;
