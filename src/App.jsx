import React from 'react';
import About from './components/About';
import Navbar from './components/NavBar';
import Skills from './components/Skills';
import Empleos from './components/Empleos';
function App() {
  return (
    <div className="relative min-h-screen">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/Balanza.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10">
        <Navbar/>
        <About/>
        <Skills/>
    <Empleos/>    
    </div>
    </div>
  );
}

export default App;
