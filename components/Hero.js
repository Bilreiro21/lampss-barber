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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] w-[min(1180px,calc(100%-32px))] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="flex w-full max-w-[650px] flex-col items-center pb-16 pt-16 text-center lg:pb-24"
        >
          <p className="mb-7 text-[11px] font-semibold tracking-[.48em] text-[#e2c58e]">
            MAIS DO QUE UM CORTE
          </p>

          <h1 className="hero-title font-serif text-[clamp(4.4rem,9vw,8.5rem)] font-semibold uppercase leading-[.77] tracking-[-.06em]">
            <span className="block text-[#e2c58e]">LAMPS</span>
            <span className="block text-white">BARBER</span>
          </h1>

          <div className="mt-8 flex items-center gap-4 text-[11px] font-semibold tracking-[.48em] text-white/80">
            <span>ESTILO</span><i className="h-1 w-1 rounded-full bg-[#c9a46a]" />
            <span>QUALIDADE</span><i className="h-1 w-1 rounded-full bg-[#c9a46a]" />
            <span>ATITUDE</span>
          </div>

          <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/55">
            Barbearia moderna, com um ambiente único e um serviço pensado ao detalhe.
            Aqui, cada corte conta uma história.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#marcacoes" className="inline-flex items-center gap-3 bg-[#d6ad6d] px-7 py-4 text-[10px] font-black tracking-[.18em] text-black transition hover:bg-[#edcf98]">
              <CalendarDays size={16} /> MARCAR HORÁRIO
            </a>
            <a href="#trabalho" className="inline-flex items-center gap-3 border border-white/30 bg-black/10 px-7 py-4 text-[10px] font-bold tracking-[.18em] text-white transition hover:border-white/70">
              <Instagram size={16} /> VER TRABALHOS
            </a>
          </div>

          <div className="mt-12 grid w-full max-w-xl grid-cols-3 border-t border-white/10 pt-5">
            <div className="flex justify-center gap-3">
              <MapPin className="mt-0.5 text-[#d6ad6d]" size={22} strokeWidth={1.3} />
              <div>
                <p className="text-[10px] tracking-[.2em] text-white/80">BARREIRO</p>
                <p className="mt-1 text-[8px] tracking-[.12em] text-white/35">R. Dom João de Castro 38, 2830-186</p>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <Clock3 className="mt-0.5 text-[#d6ad6d]" size={22} strokeWidth={1.3} />
              <div>
                <p className="text-[10px] tracking-[.2em] text-white/80">TER — SÁB</p>
                <p className="mt-1 text-[8px] tracking-[.12em] text-white/35">09:00 — 20:00</p>
              </div>
            </div>
            <div className="hidden justify-center gap-3 sm:flex">
              <Scissors className="mt-0.5 text-[#d6ad6d]" size={22} strokeWidth={1.3} />
              <div>
                <p className="text-[10px] tracking-[.2em] text-white/80">QUALIDADE</p>
                <p className="mt-1 text-[8px] tracking-[.12em] text-white/35">EM CADA DETALHE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 md:flex">
        <span className="text-[8px] tracking-[.45em]">SCROLL</span>
        <span className="h-14 w-px bg-gradient-to-b from-[#c9a46a] to-transparent" />
      </div>
    </section>
  );
}
