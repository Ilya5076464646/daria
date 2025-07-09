import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import WorkWith from './components/WorkWith';
import Services from './components/Services';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Gift from './components/Gift';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <WorkWith />
      <Services />
      <Products />
      <Reviews />
      <Gift />
      <Footer />
    </div>
  );
}

export default App;