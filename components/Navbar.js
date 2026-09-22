"use client";

import { useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";

const links = [
  ["INÍCIO", "#inicio"],
  ["SOBRE", "#sobre"],
  ["SERVIÇOS", "#servicos"],
  ["TRABALHOS", "#trabalho"],
  ["MARCAÇÃO", "#marcacoes"],
  ["CONTACTOS", "#contactos"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.08] bg-[#080706]/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-[82px] w-[min(1180px,calc(100%-32px))] items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src="/images/logo.jpg"
            alt="Lamps Barber"
            className="h-[62px] w-[62px] rounded-full object-cover ring-1 ring-[#c9a46a]/40"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href], i) => (
            <a
              key={href}
              href={href}
              className={`relative text-[11px] font-semibold tracking-[.2em] transition hover:text-[#e2c58e] ${
                i === 0 ? "text-[#e2c58e]" : "text-white/75"
              }`}
            >
              {label}
              {i === 0 && <span className="absolute -bottom-7 left-0 h-px w-full bg-[#c9a46a]" />}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="https://www.instagram.com/lampss_barber/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} strokeWidth={1.5} className="text-white transition hover:text-[#e2c58e]" />
          </a>
          <a href="https://wa.me/351000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} strokeWidth={1.5} className="text-white transition hover:text-[#e2c58e]" />
          </a>
          <a
            href="#marcacoes"
            className="border border-[#c9a46a]/75 px-6 py-3 text-[10px] font-bold tracking-[.2em] text-[#e2c58e] transition hover:bg-[#c9a46a] hover:text-black"
          >
            MARCAR AGORA
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#090807] px-6 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs tracking-[.2em] text-white/75">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
