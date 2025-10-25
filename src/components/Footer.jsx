import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="font-semibold">Quantum Playground</h5>
          <p className="text-sm text-white/70 mt-2">Where curiosity meets craft. Designed to inspire kids and give parents confidence.</p>
        </div>
        <div>
          <h6 className="text-sm font-medium text-white/90">Quick Links</h6>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-white/70 hover:text-white" href="#labs">Labs</a></li>
            <li><a className="text-white/70 hover:text-white" href="#tracks">Tracks</a></li>
            <li><a className="text-white/70 hover:text-white" href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-sm font-medium text-white/90">Newsletter</h6>
          <p className="text-sm text-white/70 mt-2">Monthly missions, zero spam.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="you@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 py-6">© {new Date().getFullYear()} Quantum Playground. All rights reserved.</div>
    </footer>
  );
}
