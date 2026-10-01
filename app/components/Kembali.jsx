import Link from 'next/link';

export default function Kembali({ judul }) {
  return (
    <header className="relative z-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
      <Link href="/" className="hover:text-[#d3ff3d]"><span aria-hidden="true">← </span>PULSE® / link.index</Link>
      <span>{judul}</span>
    </header>
  );
}
