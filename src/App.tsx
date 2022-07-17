import ThemeToggle from './components/molecules/ThemeToggle';
import Header from './components/Header';
import ViewMore from './components/molecules/ViewMore';
import Main from './components/templates/Main';
import styled from 'styled-components';

function App() {
  return (
    <Container className='App'>
      <Header />
      <ViewMore />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div``;
