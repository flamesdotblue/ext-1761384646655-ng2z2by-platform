import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white group-hover:text-purple-300 transition-colors">Quantum Playground</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#labs" className="text-white/80 hover:text-white transition-colors">Labs</a>
          <a href="#tracks" className="text-white/80 hover:text-white transition-colors">Tracks</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
        </nav>
        <a href="#labs" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
          <Star className="h-4 w-4" />
          Start Exploring
        </a>
      </div>
    </header>
  );
}
