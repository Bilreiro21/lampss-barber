"use client";

import { CalendarDays, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section id="marcacoes" className="position-relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,.1)", borderBottom: "1px solid rgba(255,255,255,.1)", background: "#0d0b09", padding: "112px 0" }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "radial-gradient(circle at 50% 100%, rgba(201,164,106,.14), transparent 42%)" }} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container position-relative text-center"
      >
        <p className="mb-3" style={{ fontSize: 10, letterSpacing: ".55em", color: "#d6ad6d" }}>MARCAÇÃO</p>
        <h2 className="font-serif text-uppercase" style={{ fontSize: "clamp(2rem, 7vw, 5rem)", lineHeight: 1 }}>
          O próximo<br /><span style={{ color: "#d6ad6d" }}>corte começa aqui.</span>
        </h2>
        <p className="mx-auto mt-4" style={{ maxWidth: 500, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.4)" }}>
          Entra em contacto e reserva o teu próximo horário.
        </p>
        <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center gap-2 gap-sm-3 mt-4">
          <a
            href="https://wa.me/351914840333"
            target="_blank"
            rel="noreferrer"
            className="d-inline-flex align-items-center justify-content-center gap-2"
            style={{ background: "#d6ad6d", padding: "14px 28px", fontSize: 10, fontWeight: 900, letterSpacing: ".18em", color: "#000", transition: "background .3s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#edcf98"}
            onMouseLeave={e => e.currentTarget.style.background = "#d6ad6d"}
          >
            <MessageCircle size={17} /> WHATSAPP
          </a>
          <a
            href="https://www.instagram.com/lampss_barber/"
            target="_blank"
            rel="noreferrer"
            className="d-inline-flex align-items-center justify-content-center gap-2"
            style={{ border: "1px solid rgba(255,255,255,.2)", padding: "14px 28px", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", color: "#fff", transition: "border-color .3s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.6)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"}
          >
            <Instagram size={17} /> INSTAGRAM
          </a>

        </div>
      </motion.div>
    </section>
  );
}
