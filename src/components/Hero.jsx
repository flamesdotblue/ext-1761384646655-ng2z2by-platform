import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.35),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">A playground for bright minds</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Ignite imagination. Build future-ready skills.
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl">
              Quantum Playground blends science, art, and code into cinematic, hands-on challenges. Designed to wow 10-year-olds and give parents the substance they want: curiosity, creativity, and real-world problem solving.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#labs" className="inline-flex justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">Explore Labs</a>
              <a href="#tracks" className="inline-flex justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition-colors">See Learning Tracks</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
