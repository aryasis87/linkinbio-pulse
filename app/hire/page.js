import { SEDIA, SITE, TARIF, rp } from '@/lib/pulse';
import Kembali from '../components/Kembali';
import FormHire from '../components/FormHire';

export const metadata = {
  title: 'Rate Card & Hire',
  description: 'Tarif mulai Raka Wijaya untuk loop media sosial, title sequence, dan brand motion system, ketersediaan Oktober 2026–Januari 2027, dan formulir brief.',
  alternates: { canonical: `${SITE}/hire` },
};

export default function Hire() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-14">
      <div className="scanlines" aria-hidden="true" />
      <Kembali judul="003 / rate card" />
      <h1 className="relative z-10 mt-14 text-5xl font-bold uppercase leading-[0.9] md:text-7xl">Rate<br /><span className="neon-lime">card</span></h1>

      <ul className="relative z-10 mt-12 border-t border-white/15">
        {TARIF.map((t) => (
          <li key={t.nama} className="grid gap-2 border-b border-white/15 py-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-6">
            <p className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{t.nama}</p>
            <p className="font-mono text-lg text-[#d3ff3d]">mulai {rp(t.mulai)}<span className="block text-xs uppercase tracking-wide text-white/65">{t.waktu}</span></p>
            <p className="text-sm text-white/75">{t.isi}</p>
          </li>
        ))}
      </ul>

      <section aria-labelledby="sedia-h" className="relative z-10 mt-14">
        <h2 id="sedia-h" className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">Ketersediaan</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {SEDIA.map(([b, s]) => (
            <li key={b} className={`rounded-xl border p-4 ${s === 'penuh' ? 'border-white/15 text-white/60' : 'border-[#d3ff3d]/60'}`}>
              <p className="font-mono text-xs uppercase tracking-wide">{b}</p>
              <p className={`mt-2 font-display text-2xl font-bold uppercase ${s === 'penuh' ? '' : 'text-[#d3ff3d]'}`}>{s}</p>
            </li>
          ))}
        </ul>
      </section>

      <FormHire />
      <p className="relative z-10 mt-10 font-mono text-[11px] text-white/60">Tarif dan ketersediaan adalah contoh purwarupa desain.</p>
    </main>
  );
}
