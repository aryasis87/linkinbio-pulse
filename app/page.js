'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LINKS, PROFIL } from '@/lib/pulse';

const item = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};
const MotionLink = motion.create(Link);

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-14">
      <div className="scanlines" aria-hidden="true" />

      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
        <span>PULSE® / link.index</span>
        <span className="flex items-center gap-2"><span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#d3ff3d]" aria-hidden="true" /> terbuka November</span>
      </motion.header>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14 md:mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">{PROFIL.nama} — {PROFIL.kota}</p>
        <h1 className="mt-3 text-6xl font-bold uppercase leading-[0.9] md:text-8xl">
          Motion<br /><span className="neon-lime">Designer</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
          Membuat merek bergerak: title sequence, brand motion system, dan visual 3D yang berdenyut.
        </p>
      </motion.section>

      <nav className="relative z-10 mt-14 border-t border-white/15 md:mt-20" aria-label="Tautan utama">
        {LINKS.map((l, i) => (
          <MotionLink
            key={l.no}
            href={l.href}
            custom={i}
            initial="hidden"
            animate="show"
            variants={item}
            whileHover="hover"
            className="group flex items-center gap-5 border-b border-white/15 py-5 md:gap-8 md:py-6"
          >
            <span className="font-mono text-[11px] text-white/60 transition group-hover:text-[#d3ff3d]">{l.no}</span>
            <motion.span variants={{ hover: { x: 14, skewX: -6 } }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="flex-1 font-display text-3xl font-bold uppercase tracking-tight transition group-hover:text-[#d3ff3d] md:text-5xl">
              {l.label}
            </motion.span>
            <span className="hidden font-mono text-[11px] uppercase tracking-wide text-white/65 sm:block">{l.meta}</span>
            <ArrowUpRight size={22} className="shrink-0 text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d3ff3d]" aria-hidden="true" />
          </MotionLink>
        ))}
      </nav>

      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/65">
        <span>Instagram & Vimeo: {PROFIL.handle}</span>
        <span>AE · C4D · Blender · Rive</span>
        <span className="w-full normal-case tracking-normal">Persona fiktif untuk purwarupa desain — klien dan angka hanya contoh.</span>
      </motion.footer>
    </main>
  );
}
