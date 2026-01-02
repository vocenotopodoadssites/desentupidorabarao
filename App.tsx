
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Botão Flutuante de WhatsApp (Desktop e Mobile) */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
