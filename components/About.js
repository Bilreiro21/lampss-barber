"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" style={{ background: "#080706", padding: "112px 0" }}>
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-12 col-md-6"
          >
            <div
              className="position-relative overflow-hidden"
              style={{ aspectRatio: "4/5", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <img src="/images/barber.jpg" alt="Lamps Barber" className="w-100 h-100" style={{ objectFit: "cover" }} />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,.6), transparent 50%)" }} />
            </div>
          </motion.div>

          <div className="col-12 col-md-6">
            <p className="mb-3" style={{ fontSize: 10, letterSpacing: ".55em", color: "#d6ad6d" }}>SOBRE NÓS</p>
            <h2 className="font-serif text-uppercase" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: .95, letterSpacing: ".03em" }}>
              Técnica.<br />Estilo.<br /><span style={{ color: "#d6ad6d" }}>Atitude.</span>
            </h2>
            <p className="mt-4" style={{ maxWidth: 480, fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.5)" }}>
              Um espaço pensado para quem valoriza o detalhe. Cada serviço é realizado
              com atenção, precisão e uma abordagem personalizada.
            </p>
            <div className="row mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
              <div className="col-6">
                <p className="font-serif mb-1" style={{ fontSize: "2.2rem", color: "#e2c58e" }}>100%</p>
                <p className="mb-0" style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,.35)" }}>DEDICAÇÃO</p>
              </div>
              <div className="col-6">
                <p className="font-serif mb-1" style={{ fontSize: "2.2rem", color: "#e2c58e" }}>∞</p>
                <p className="mb-0" style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,.35)" }}>PRECISÃO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
