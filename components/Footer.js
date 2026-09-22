"use client";

import { Instagram, MapPin, Phone, Clock3, Scissors, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contactos" className="position-relative overflow-hidden" style={{ background: "#050504" }}>
      {/* Gold accent line */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(201,164,106,.4), transparent)" }} />

      {/* Main footer content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container"
        style={{ padding: "80px 0" }}
      >
        {/* Top section — Logo + tagline centered */}
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <img
            src="/images/logo.jpg"
            alt="Lamps Barber"
            className="rounded-circle mx-auto d-block"
            style={{
              height: 96,
              width: 96,
              objectFit: "cover",
              border: "2px solid rgba(201,164,106,.3)",
              boxShadow: "0 0 40px rgba(201,164,106,.15)"
            }}
          />
          <h3 className="font-serif mt-4 mb-2" style={{ fontSize: "1.5rem", letterSpacing: ".12em" }}>LAMPS BARBER</h3>
          <p className="mb-0" style={{ fontSize: 10, letterSpacing: ".5em", color: "rgba(201,164,106,.7)" }}>
            ESTILO · QUALIDADE · ATITUDE
          </p>
        </div>

        {/* Info grid */}
        <div className="row g-4 text-center">
          {/* Location */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ width: 48, height: 48, border: "1px solid rgba(201,164,106,.2)", background: "rgba(201,164,106,.05)" }}
              >
                <MapPin size={20} style={{ color: "#d6ad6d" }} strokeWidth={1.4} />
              </div>
              <p className="mb-1" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".3em", color: "rgba(255,255,255,.7)" }}>LOCALIZAÇÃO</p>
              <p className="mb-0" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.4)" }}>
                R. Dom João de Castro 38<br />
                Barreiro, 2830-186
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ width: 48, height: 48, border: "1px solid rgba(201,164,106,.2)", background: "rgba(201,164,106,.05)" }}
              >
                <Clock3 size={20} style={{ color: "#d6ad6d" }} strokeWidth={1.4} />
              </div>
              <p className="mb-1" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".3em", color: "rgba(255,255,255,.7)" }}>HORÁRIO</p>
              <p className="mb-0" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.4)" }}>
                Ter — Sáb: 09:30 — 19:00<br />
                (Almoço: 13:00 — 15:00)<br />
                Dom e Seg: Encerrado
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ width: 48, height: 48, border: "1px solid rgba(201,164,106,.2)", background: "rgba(201,164,106,.05)" }}
              >
                <Phone size={20} style={{ color: "#d6ad6d" }} strokeWidth={1.4} />
              </div>
              <p className="mb-1" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".3em", color: "rgba(255,255,255,.7)" }}>CONTACTO</p>
              <p className="mb-1" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.4)" }}>+351 914 840 333</p>
              <a
                href="https://www.instagram.com/lampss_barber/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center gap-2"
                style={{ fontSize: 14, color: "rgba(214,173,109,.7)", transition: "color .3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#d6ad6d"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(214,173,109,.7)"}
              >
                <Instagram size={16} /> @lampss_barber
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-top" style={{ borderColor: "rgba(255,255,255,.06) !important" }}>
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3" style={{ padding: "20px 0" }}>
          <p className="mb-0" style={{ fontSize: 9, letterSpacing: ".22em", color: "rgba(255,255,255,.2)" }}>
            © {new Date().getFullYear()} LAMPS BARBER — TODOS OS DIREITOS RESERVADOS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="d-flex align-items-center gap-2 bg-transparent border-0"
            style={{ fontSize: 9, letterSpacing: ".22em", color: "rgba(255,255,255,.25)", cursor: "pointer", transition: "color .3s" }}
            onMouseEnter={e => e.currentTarget.style.color = "rgba(214,173,109,.7)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.25)"}
          >
            VOLTAR AO TOPO
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
