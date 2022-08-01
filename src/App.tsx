import Header from './components/Organism/Header';
import Home from './components/templates/Home';
import About from './components/templates/About';
import Project from './components/templates/Projects';
import Footer from './components/Organism/Footer';
import Spec from './components/templates/Spec';
import Contact from './components/templates/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Spec />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
