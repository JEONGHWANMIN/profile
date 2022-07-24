import Header from './components/Header';
import ViewMore from './components/molecules/ViewMore';
import Main from './components/templates/Main';
import styled from 'styled-components';
import Home from './components/templates/Home';
import Layout from './components/templates/Layout';
import About from './components/templates/About';
import { useRecoilValue } from 'recoil';
import { themeState } from './lib/atom/atom';
function App() {
  const curTheme = useRecoilValue(themeState);
  console.log(typeof curTheme);
  return (
    <div>
      <Header />
      <Home />
      <About curTheme={curTheme} />
      <Main />
      <Main />
      <Main />
    </div>
  );
}

export default App;

const Container = styled.div``;
