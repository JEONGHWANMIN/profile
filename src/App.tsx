import Header from './components/Header';
import Main from './components/templates/Main';
import Home from './components/templates/Home';
import About from './components/templates/About';
import Project from './components/templates/Project';
import { useRecoilValue } from 'recoil';
import { themeState } from './lib/atom/atom';
function App() {
  const curTheme = useRecoilValue(themeState);
  return (
    <div>
      <Header />
      <Home />
      <About curTheme={curTheme} />
      <Project />
      <Main />
      <Main />
    </div>
  );
}

export default App;
