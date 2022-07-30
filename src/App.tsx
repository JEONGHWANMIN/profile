import Header from './components/Organism/Header';
import Home from './components/templates/Home';
import About from './components/templates/About';
import Project from './components/templates/Project';
import { useRecoilValue } from 'recoil';
import { themeState } from './lib/atom/atom';
import Footer from './components/Organism/Footer';
import Award from './components/templates/Award';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Award />
      <Footer />
    </div>
  );
}

export default App;
