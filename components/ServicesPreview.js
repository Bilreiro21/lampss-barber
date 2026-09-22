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
    <section id="servicos" className="relative border-t border-white/[.08] bg-[#080706] py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mb-12 text-center">
          <p className="text-[10px] font-semibold tracking-[.55em] text-[#d6ad6d]">OS NOSSOS SERVIÇOS</p>
          <h2 className="mt-5 font-serif text-3xl uppercase tracking-[.15em] text-white md:text-4xl">
            Cuidamos de cada detalhe
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([title, Icon]) => (
            <div key={title} className="group min-h-[180px] border border-white/[.08] bg-[#0b0a08] p-7 text-center transition hover:-translate-y-1 hover:border-[#c9a46a]/50">
              <Icon size={38} strokeWidth={1} className="mx-auto text-[#d6ad6d] transition group-hover:scale-110" />
              <p className="mt-8 text-[11px] font-semibold tracking-[.3em] text-white/80">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
