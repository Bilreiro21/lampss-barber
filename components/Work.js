"use client";

import { motion } from "framer-motion";

const works = [
  ["work-01.jpg", "FADE"],
  ["work-02.jpg", "CLASSIC"],
  ["work-03.jpg", "BEARD"],
  ["work-04.jpg", "SIGNATURE"]
];

export default function Work() {
  return (
    <section id="trabalho" className="bg-[#0c0a08] py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[.55em] text-[#d6ad6d]">PORTFÓLIO</p>
            <h2 className="mt-5 font-serif text-4xl uppercase tracking-[.08em] md:text-6xl">Os nossos trabalhos</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-white/35 md:block">
            Coloca aqui as melhores fotografias dos cortes e trabalhos do Lamps Barber.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          {works.map(([file, title], i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
              className={`group relative h-[430px] overflow-hidden border border-white/[.08] ${
                i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <img
                src={`/images/${file}`}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 text-[9px] tracking-[.3em] text-[#d6ad6d]">0{i + 1}</span>
              <div className="absolute bottom-7 left-7">
                <p className="text-[9px] tracking-[.35em] text-white/45">LAMPS BARBER</p>
                <h3 className="mt-2 font-serif text-2xl tracking-[.12em]">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
