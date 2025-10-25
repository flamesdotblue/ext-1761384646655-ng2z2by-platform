import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Labs from './components/Labs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Labs />
      </main>
      <Footer />
    </div>
  );
}
