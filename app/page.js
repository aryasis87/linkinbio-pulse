'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  { no: '001', label: 'SHOWREEL 2026', meta: '2 menit — motion & 3D', url: '#' },
  { no: '002', label: 'BEHANCE', meta: 'studi kasus lengkap', url: 'https://behance.net' },
  { no: '003', label: 'INSTAGRAM', meta: 'eksperimen harian', url: 'https://instagram.com' },
  { no: '004', label: 'TOOLKIT & PRESET', meta: 'AE / Blender — gratis', url: '#' },
  { no: '005', label: 'HIRE ME', meta: 'slot Q3 terbuka', url: 'mailto:raka@pulse.studio' },
];

const item = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-14">
      <div className="scanlines" aria-hidden="true" />

      {/* Header meta */}
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
        <span>PULSE® / link.index</span>
        <span className="flex items-center gap-2"><span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#d3ff3d]" /> open for work</span>
      </motion.header>

      {/* Identitas */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14 md:mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/45">Raka Wijaya — Jakarta</p>
        <h1 className="mt-3 text-6xl font-bold uppercase leading-[0.9] md:text-8xl">
          Motion<br /><span className="neon-lime">Designer</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
          Membuat merek bergerak: title sequence, brand motion system, dan visual 3D yang berdenyut.
        </p>
      </motion.section>

      {/* Link rows raksasa */}
      <nav className="mt-14 border-t border-white/10 md:mt-20" aria-label="Tautan utama">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.no}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            animate="show"
            variants={item}
            whileHover="hover"
            className="group flex items-center gap-5 border-b border-white/10 py-5 md:gap-8 md:py-6"
          >
            <span className="font-mono text-[11px] text-white/30 transition group-hover:text-[#d3ff3d]">{l.no}</span>
            <motion.span variants={{ hover: { x: 14, skewX: -6 } }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="flex-1 font-display text-3xl font-bold uppercase tracking-tight transition group-hover:neon-lime group-hover:text-[#d3ff3d] md:text-5xl">
              {l.label}
            </motion.span>
            <span className="hidden font-mono text-[11px] uppercase tracking-wide text-white/35 sm:block">{l.meta}</span>
            <ArrowUpRight size={22} className="shrink-0 text-white/25 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d3ff3d]" />
          </motion.a>
        ))}
      </nav>

      {/* Footer */}
      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
        <span>© {new Date().getFullYear()} pulse.studio</span>
        <span>AE · C4D · Blender · Rive</span>
      </motion.footer>
    </main>
  );
}
