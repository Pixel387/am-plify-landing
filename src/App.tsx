import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrackRecord from './components/TrackRecord';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrackRecord />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
