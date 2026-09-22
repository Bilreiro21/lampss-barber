"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="bg-[#080706] py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-14 md:grid-cols-2 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden border border-white/10"
        >
          <img src="/images/barber.jpg" alt="Lamps Barber" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <div>
          <p className="text-[10px] tracking-[.55em] text-[#d6ad6d]">SOBRE NÓS</p>
          <h2 className="mt-6 font-serif text-5xl uppercase leading-[.95] tracking-[.03em] md:text-7xl">
            Técnica.<br />Estilo.<br /><span className="text-[#d6ad6d]">Atitude.</span>
          </h2>
          <p className="mt-8 max-w-lg text-[15px] leading-7 text-white/50">
            Um espaço pensado para quem valoriza o detalhe. Cada serviço é realizado
            com atenção, precisão e uma abordagem personalizada.
          </p>
          <div className="mt-9 grid grid-cols-2 border-t border-white/10 pt-6">
            <div>
              <p className="font-serif text-4xl text-[#e2c58e]">100%</p>
              <p className="mt-2 text-[9px] tracking-[.3em] text-white/35">DEDICAÇÃO</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#e2c58e]">∞</p>
              <p className="mt-2 text-[9px] tracking-[.3em] text-white/35">PRECISÃO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
