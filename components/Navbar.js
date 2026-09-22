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
      <nav className="container d-flex align-items-center justify-content-between" style={{ height: 82 }}>
        <div className="d-flex align-items-center gap-4 gap-xl-5">
          <a href="#inicio" className="d-flex align-items-center">
            <img
              src="/images/logo.jpg"
              alt="Lamps Barber"
              className="rounded-circle object-cover ring-1 ring-[#c9a46a]/40"
              style={{ height: 62, width: 62 }}
            />
          </a>

          <div className="d-none d-lg-flex align-items-center gap-4">
            {links.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                className={`position-relative text-decoration-none`}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".2em",
                  color: i === 0 ? "#e2c58e" : "rgba(255,255,255,.75)",
                  transition: "color .3s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#e2c58e"}
                onMouseLeave={e => { if (i !== 0) e.currentTarget.style.color = "rgba(255,255,255,.75)"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-3">
          <a href="https://www.instagram.com/lampss_barber/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} strokeWidth={1.5} className="text-white transition hover:text-[#e2c58e]" />
          </a>
          <a href="https://wa.me/351000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} strokeWidth={1.5} className="text-white transition hover:text-[#e2c58e]" />
          </a>
          <a
            href="#marcacoes"
            className="d-inline-flex align-items-center"
            style={{
              border: "1px solid rgba(201,164,106,.75)",
              padding: "12px 24px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".2em",
              color: "#e2c58e",
              transition: "all .3s"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#c9a46a"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#e2c58e"; }}
          >
            MARCAR AGORA
          </a>
        </div>

        <button
          className="d-lg-none bg-transparent border-0 text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="d-lg-none border-top border-white/10" style={{ background: "#090807", padding: "8px 0" }}>
          <div className="container">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="d-block text-decoration-none border-bottom py-3"
                style={{
                  fontSize: 12,
                  letterSpacing: ".2em",
                  color: "rgba(255,255,255,.75)",
                  borderColor: "rgba(255,255,255,.1)"
                }}
              >
                {label}
              </a>
            ))}
            <div className="d-flex gap-3 py-3">
              <a
                href="#marcacoes"
                onClick={() => setOpen(false)}
                className="d-inline-flex align-items-center gap-2 flex-grow-1 justify-content-center"
                style={{
                  background: "#d6ad6d",
                  padding: "14px 20px",
                  fontSize: 10,
                  fontWeight: 900,
                  letterSpacing: ".18em",
                  color: "#000"
                }}
              >
                MARCAR AGORA
              </a>
              <a
                href="https://www.instagram.com/lampss_barber/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center justify-content-center"
                style={{
                  border: "1px solid rgba(255,255,255,.2)",
                  padding: "14px 18px",
                  color: "#fff"
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
