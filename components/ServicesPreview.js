"use client";

import { Scissors, Sparkles, Wind, UserRound } from "lucide-react";

const services = [
  ["CORTE", Scissors],
  ["BARBA", UserRound],
  ["CORTE + BARBA", Scissors],
  ["SOBRANCELHA", Sparkles],
  ["OUTROS SERVIÇOS", Wind]
];

export default function ServicesPreview() {
  return (
    <section id="servicos" className="position-relative" style={{ borderTop: "1px solid rgba(255,255,255,.08)", background: "#080706", padding: "80px 0" }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="mb-3" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".55em", color: "#d6ad6d" }}>OS NOSSOS SERVIÇOS</p>
          <h2 className="font-serif text-uppercase" style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", letterSpacing: ".15em" }}>
            Cuidamos de cada detalhe
          </h2>
        </div>

        <div className="row g-3">
          {services.map(([title, Icon]) => (
            <div key={title} className="col-6 col-lg">
              <div
                className="text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  minHeight: 160,
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "#0b0a08",
                  padding: "28px 16px",
                  transition: "transform .3s, border-color .3s"
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(201,164,106,.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.08)"; }}
              >
                <Icon size={34} strokeWidth={1} style={{ color: "#d6ad6d" }} />
                <p className="mt-4 mb-0" style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".3em", color: "rgba(255,255,255,.8)" }}>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
