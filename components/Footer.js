"use client";

import { Instagram, MapPin, Phone, Clock3, Scissors, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contactos" className="relative bg-[#050504] overflow-hidden">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a46a]/40 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        {/* Top section — Logo + tagline centered */}
        <div className="mb-16 flex flex-col items-center text-center">
          <img
            src="/images/logo.jpg"
            alt="Lamps Barber"
            className="h-24 w-24 rounded-full object-cover border-2 border-[#c9a46a]/30 shadow-[0_0_40px_rgba(201,164,106,.15)]"
          />
          <h3 className="mt-6 font-serif text-2xl tracking-[.12em] text-white">LAMPS BARBER</h3>
          <p className="mt-3 text-[10px] tracking-[.5em] text-[#c9a46a]/70">
            ESTILO · QUALIDADE · ATITUDE
          </p>
        </div>

        {/* Info grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a46a]/20 bg-[#c9a46a]/5">
              <MapPin size={20} className="text-[#d6ad6d]" strokeWidth={1.4} />
            </div>
            <p className="text-[10px] font-semibold tracking-[.3em] text-white/70">LOCALIZAÇÃO</p>
            <p className="mt-2 text-sm leading-6 text-white/40">
              R. Dom João de Castro 38<br />
              Barreiro, 2830-186
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a46a]/20 bg-[#c9a46a]/5">
              <Clock3 size={20} className="text-[#d6ad6d]" strokeWidth={1.4} />
            </div>
            <p className="text-[10px] font-semibold tracking-[.3em] text-white/70">HORÁRIO</p>
            <p className="mt-2 text-sm leading-6 text-white/40">
              Ter — Sáb: 09:00 — 20:00<br />
              Dom e Seg: Encerrado
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a46a]/20 bg-[#c9a46a]/5">
              <Phone size={20} className="text-[#d6ad6d]" strokeWidth={1.4} />
            </div>
            <p className="text-[10px] font-semibold tracking-[.3em] text-white/70">CONTACTO</p>
            <p className="mt-2 text-sm leading-6 text-white/40">+351 XXX XXX XXX</p>
            <a
              href="https://www.instagram.com/lampss_barber/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#d6ad6d]/70 transition hover:text-[#d6ad6d]"
            >
              <Instagram size={16} /> @lampss_barber
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[.06]">
        <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[9px] tracking-[.22em] text-white/20">
            © {new Date().getFullYear()} LAMPS BARBER — TODOS OS DIREITOS RESERVADOS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[9px] tracking-[.22em] text-white/25 transition hover:text-[#d6ad6d]/70"
          >
            VOLTAR AO TOPO
            <ArrowUp size={14} className="transition group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
