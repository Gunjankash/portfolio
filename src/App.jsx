import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorTrail from './components/SparkleTrail';
import Hero from './components/Hero';
import About from './components/About';
import Talks from './components/Talks';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import cursorImage from './assets/Curser.png';
import Experience from './components/Experience';

import './App.css';

function App() {
  return (
    <>
      <CursorTrail />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
      
    </>
  );
}

export default App;
