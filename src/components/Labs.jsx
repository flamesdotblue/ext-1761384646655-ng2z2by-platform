import React from 'react';
import { Cpu, Palette, Orbit, Code, Sparkles } from 'lucide-react';

const tracks = [
  {
    id: 'code',
    icon: Code,
    title: 'Creative Coding',
    badge: 'Logic + Storytelling',
    desc: 'Turn ideas into interactive art, mini games, and smart gadgets. Learn fundamentals while building things you can show off.'
  },
  {
    id: 'sci',
    icon: Orbit,
    title: 'Future Science',
    badge: 'Curiosity + Experiments',
    desc: 'Test wild hypotheses with everyday materials. From chain reactions to space habitats—prototype like a real researcher.'
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI Playground',
    badge: 'Ethics + AI Literacy',
    desc: 'Train tiny models, design fair rules, and build assistants that help—not replace—human creativity and teamwork.'
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design Studio',
    badge: 'Taste + Craft',
    desc: 'Sketch interfaces, build brand vibes, and present ideas clearly. Learn how great products look, feel, and behave.'
  }
];

const missions = [
  {
    title: 'Mission: Light the Nebula',
    label: '30–45 min',
    desc: 'Use LEDs, paper circuits or block code to choreograph a luminous show that reacts to sound.'
  },
  {
    title: 'Mission: Micro City',
    label: '45–60 min',
    desc: 'Design a tiny sustainable city. Balance energy, transport, nature—and pitch your master plan.'
  },
  {
    title: 'Mission: Friendly Bot',
    label: '30–60 min',
    desc: 'Prototype a helpful bot with personality. Define rules so it stays kind, safe, and useful.'
  }
];

export default function Labs() {
  return (
    <section id="labs" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Hands-on Labs</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Build, test, and iterate through guided missions that spark flow. Every activity blends creativity with clear learning outcomes parents can track.</p>
          </div>
          <a href="#about" className="hidden md:inline-flex rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition-colors">How it works</a>
        </header>

        <div id="tracks" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map(({ id, icon: Icon, title, badge, desc }) => (
            <article key={id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-b from-transparent to-purple-500/10" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-xs text-white/70">{badge}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">{desc}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200">
                Explore examples
                <Sparkles className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {missions.map((m, idx) => (
            <article key={idx} className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />
              <h4 className="text-lg font-medium">{m.title}</h4>
              <p className="text-xs mt-1 text-white/60">{m.label}</p>
              <p className="mt-3 text-sm text-white/80">{m.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-xs">Printable Guide</span>
                <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-xs">Household Materials</span>
              </div>
            </article>
          ))}
        </div>

        <div id="about" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.04]">
            <p className="text-sm text-white/70">Kid-magnetic. Parent-approved. We design for depth and delight—no fluff, no sugar-coating, just elegant prompts that challenge and reward.</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.04]">
            <p className="text-sm text-white/70">Clear outcomes. Each lab signals the skills in play—systems thinking, collaboration, ethics, design—and includes tips for reflection at home.</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.04]">
            <p className="text-sm text-white/70">Flexible formats. Try a 30-minute mission, a weekend build, or a themed party kit. Everything is modular and remixable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
