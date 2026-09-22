"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Scissors,
  Sparkles
} from "lucide-react";

const floatingTools = [
  // Row 1 — top area
  { type: "scissors", left: "2%", top: "5%", delay: "-2s", duration: "21s", size: 88 },
  { type: "comb", left: "12%", top: "8%", delay: "-17s", duration: "26s", size: 52 },
  { type: "sparkles", left: "24%", top: "3%", delay: "-8s", duration: "19s", size: 36 },
  { type: "scissors", left: "36%", top: "7%", delay: "-12s", duration: "23s", size: 60 },
  { type: "comb", left: "48%", top: "4%", delay: "-14s", duration: "24s", size: 44 },
  { type: "sparkles", left: "60%", top: "9%", delay: "-1s", duration: "20s", size: 48 },
  { type: "scissors", left: "73%", top: "6%", delay: "-6s", duration: "22s", size: 70 },
  { type: "comb", left: "86%", top: "3%", delay: "-19s", duration: "25s", size: 56 },
  // Row 2
  { type: "sparkles", left: "5%", top: "18%", delay: "-4s", duration: "18s", size: 40 },
  { type: "scissors", left: "16%", top: "22%", delay: "-10s", duration: "27s", size: 76 },
  { type: "comb", left: "28%", top: "16%", delay: "-22s", duration: "21s", size: 62 },
  { type: "sparkles", left: "42%", top: "20%", delay: "-7s", duration: "19s", size: 34 },
  { type: "scissors", left: "56%", top: "17%", delay: "-15s", duration: "24s", size: 54 },
  { type: "comb", left: "68%", top: "23%", delay: "-3s", duration: "26s", size: 46 },
  { type: "sparkles", left: "80%", top: "15%", delay: "-11s", duration: "20s", size: 44 },
  { type: "scissors", left: "93%", top: "19%", delay: "-20s", duration: "23s", size: 66 },
  // Row 3
  { type: "comb", left: "3%", top: "32%", delay: "-9s", duration: "25s", size: 72 },
  { type: "sparkles", left: "14%", top: "36%", delay: "-16s", duration: "22s", size: 50 },
  { type: "scissors", left: "25%", top: "30%", delay: "-5s", duration: "20s", size: 58 },
  { type: "comb", left: "38%", top: "34%", delay: "-13s", duration: "28s", size: 48 },
  { type: "sparkles", left: "52%", top: "31%", delay: "-2s", duration: "19s", size: 38 },
  { type: "scissors", left: "64%", top: "37%", delay: "-18s", duration: "24s", size: 82 },
  { type: "comb", left: "76%", top: "33%", delay: "-8s", duration: "21s", size: 54 },
  { type: "sparkles", left: "90%", top: "35%", delay: "-14s", duration: "26s", size: 42 },
  // Row 4
  { type: "scissors", left: "6%", top: "46%", delay: "-7s", duration: "23s", size: 64 },
  { type: "comb", left: "18%", top: "50%", delay: "-21s", duration: "20s", size: 56 },
  { type: "sparkles", left: "30%", top: "44%", delay: "-3s", duration: "18s", size: 46 },
  { type: "scissors", left: "44%", top: "48%", delay: "-11s", duration: "25s", size: 74 },
  { type: "comb", left: "58%", top: "45%", delay: "-16s", duration: "22s", size: 40 },
  { type: "sparkles", left: "70%", top: "51%", delay: "-6s", duration: "27s", size: 52 },
  { type: "scissors", left: "82%", top: "47%", delay: "-19s", duration: "24s", size: 68 },
  { type: "comb", left: "95%", top: "49%", delay: "-1s", duration: "21s", size: 58 },
  // Row 5
  { type: "sparkles", left: "4%", top: "60%", delay: "-12s", duration: "19s", size: 36 },
  { type: "scissors", left: "15%", top: "64%", delay: "-5s", duration: "26s", size: 80 },
  { type: "comb", left: "27%", top: "58%", delay: "-18s", duration: "23s", size: 50 },
  { type: "sparkles", left: "40%", top: "62%", delay: "-9s", duration: "20s", size: 44 },
  { type: "scissors", left: "54%", top: "59%", delay: "-15s", duration: "25s", size: 62 },
  { type: "comb", left: "66%", top: "65%", delay: "-2s", duration: "22s", size: 70 },
  { type: "sparkles", left: "78%", top: "61%", delay: "-10s", duration: "18s", size: 38 },
  { type: "scissors", left: "91%", top: "63%", delay: "-20s", duration: "27s", size: 56 },
  // Row 6
  { type: "comb", left: "8%", top: "74%", delay: "-4s", duration: "24s", size: 66 },
  { type: "sparkles", left: "20%", top: "78%", delay: "-13s", duration: "21s", size: 48 },
  { type: "scissors", left: "33%", top: "72%", delay: "-7s", duration: "19s", size: 54 },
  { type: "comb", left: "46%", top: "76%", delay: "-17s", duration: "26s", size: 42 },
  { type: "sparkles", left: "59%", top: "73%", delay: "-3s", duration: "23s", size: 40 },
  { type: "scissors", left: "72%", top: "79%", delay: "-11s", duration: "20s", size: 78 },
  { type: "comb", left: "84%", top: "75%", delay: "-19s", duration: "25s", size: 60 },
  { type: "sparkles", left: "96%", top: "77%", delay: "-8s", duration: "22s", size: 34 },
  // Row 7 — bottom area
  { type: "scissors", left: "1%", top: "88%", delay: "-6s", duration: "21s", size: 72 },
  { type: "comb", left: "17%", top: "92%", delay: "-14s", duration: "27s", size: 46 },
  { type: "sparkles", left: "35%", top: "86%", delay: "-2s", duration: "18s", size: 52 },
  { type: "scissors", left: "50%", top: "90%", delay: "-10s", duration: "24s", size: 64 },
  { type: "comb", left: "63%", top: "87%", delay: "-20s", duration: "22s", size: 38 },
  { type: "sparkles", left: "77%", top: "93%", delay: "-5s", duration: "19s", size: 44 },
  { type: "scissors", left: "88%", top: "89%", delay: "-16s", duration: "26s", size: 58 },
  { type: "comb", left: "95%", top: "91%", delay: "-9s", duration: "23s", size: 50 }
];

function Tool({ type, size }) {
  if (type === "scissors") return <Scissors size={size} strokeWidth={1.05} />;
  if (type === "sparkles") return <Sparkles size={size} strokeWidth={1} />;
  return (
    <div className="relative" style={{ width: size * .42, height: size }}>
      <div className="absolute inset-0 rounded-sm border border-current opacity-90" />
      {Array.from({ length: 13 }).map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 h-px w-[72%] -translate-x-1/2 bg-current"
          style={{ top: `${8 + i * 7}%` }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#080706] pt-[82px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(142,104,58,.27),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(201,164,106,.08),transparent_34%),linear-gradient(100deg,#050504_0%,#100e0a_48%,#050504_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#080706_0%,transparent_22%,transparent_80%,#080706_100%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden text-[#c9a46a] opacity-25">
          {floatingTools.map((tool, i) => (
            <div
              key={i}
              className="floating-tool absolute"
              style={{
                left: tool.left,
                top: tool.top,
                "--tool-delay": tool.delay,
                "--tool-duration": tool.duration
              }}
            >
              <Tool type={tool.type} size={tool.size} />
            </div>
          ))}
        </div>
      </div>

      <div className="position-relative" style={{ zIndex: 10 }}>
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "calc(100vh - 82px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center w-100 py-4 py-md-5"
            style={{ maxWidth: 650 }}
          >
            <p className="mb-3 mb-md-4" style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".48em", color: "#e2c58e" }}>
              MAIS DO QUE UM CORTE
            </p>

            <h1 className="hero-title font-serif text-uppercase" style={{ fontSize: "clamp(3.2rem, 12vw, 8.5rem)", fontWeight: 600, lineHeight: .77, letterSpacing: "-.06em" }}>
              <span className="d-block" style={{ color: "#e2c58e" }}>LAMPS</span>
              <span className="d-block text-white">BARBER</span>
            </h1>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-4" style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".48em", color: "rgba(255,255,255,.8)" }}>
              <span>ESTILO</span><i className="rounded-circle d-inline-block" style={{ width: 4, height: 4, background: "#c9a46a" }} />
              <span>QUALIDADE</span><i className="rounded-circle d-inline-block" style={{ width: 4, height: 4, background: "#c9a46a" }} />
              <span>ATITUDE</span>
            </div>

            <p className="mx-auto mt-4" style={{ maxWidth: 480, fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.55)" }}>
              Barbearia moderna, com um ambiente único e um serviço pensado ao detalhe.
              Aqui, cada corte conta uma história.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 mt-4">
              <a
                href="#marcacoes"
                className="d-inline-flex align-items-center justify-content-center gap-2"
                style={{ background: "#d6ad6d", padding: "14px 28px", fontSize: 10, fontWeight: 900, letterSpacing: ".18em", color: "#000", transition: "background .3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#edcf98"}
                onMouseLeave={e => e.currentTarget.style.background = "#d6ad6d"}
              >
                <CalendarDays size={16} /> MARCAR HORÁRIO
              </a>
              <a
                href="#trabalho"
                className="d-inline-flex align-items-center justify-content-center gap-2"
                style={{ border: "1px solid rgba(255,255,255,.3)", background: "rgba(0,0,0,.1)", padding: "14px 28px", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", color: "#fff", transition: "border-color .3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.7)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.3)"}
              >
                <Instagram size={16} /> VER TRABALHOS
              </a>
            </div>

            <div className="row mt-5 pt-4 border-top" style={{ borderColor: "rgba(255,255,255,.1)" }}>
              <div className="col-6 col-md-4 d-flex justify-content-center gap-2 mb-3 mb-md-0">
                <MapPin className="mt-0.5 flex-shrink-0" size={20} strokeWidth={1.3} style={{ color: "#d6ad6d" }} />
                <div className="text-start">
                  <p className="mb-0" style={{ fontSize: 10, letterSpacing: ".2em", color: "rgba(255,255,255,.8)" }}>BARREIRO</p>
                  <p className="mb-0 mt-1" style={{ fontSize: 8, letterSpacing: ".12em", color: "rgba(255,255,255,.35)" }}>R. Dom João de Castro 38, 2830-186</p>
                </div>
              </div>
              <div className="col-6 col-md-4 d-flex justify-content-center gap-2 mb-3 mb-md-0">
                <Clock3 className="mt-0.5 flex-shrink-0" size={20} strokeWidth={1.3} style={{ color: "#d6ad6d" }} />
                <div className="text-start">
                  <p className="mb-0" style={{ fontSize: 10, letterSpacing: ".2em", color: "rgba(255,255,255,.8)" }}>TER — SÁB</p>
                  <p className="mb-0 mt-1" style={{ fontSize: 8, letterSpacing: ".12em", color: "rgba(255,255,255,.35)" }}>09:00 — 20:00</p>
                </div>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-2">
                <Scissors className="mt-0.5 flex-shrink-0" size={20} strokeWidth={1.3} style={{ color: "#d6ad6d" }} />
                <div className="text-start">
                  <p className="mb-0" style={{ fontSize: 10, letterSpacing: ".2em", color: "rgba(255,255,255,.8)" }}>QUALIDADE</p>
                  <p className="mb-0 mt-1" style={{ fontSize: 8, letterSpacing: ".12em", color: "rgba(255,255,255,.35)" }}>EM CADA DETALHE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x d-none d-md-flex flex-column align-items-center gap-2" style={{ color: "rgba(255,255,255,.35)", zIndex: 20 }}>
        <span style={{ fontSize: 8, letterSpacing: ".45em" }}>SCROLL</span>
        <span style={{ height: 56, width: 1, background: "linear-gradient(to bottom, #c9a46a, transparent)" }} />
      </div>
    </section>
  );
}
