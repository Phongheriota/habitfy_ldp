import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Feature from './components/Feature';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Feature />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;