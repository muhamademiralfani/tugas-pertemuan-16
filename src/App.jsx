import './App.css';
import About from './components/About';
import Navbar from './components/Navbar/index';
import Teams from './components/Team';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Teams />
      <Quotes />
      <Footer />
    </>
  );
}

export default App;
