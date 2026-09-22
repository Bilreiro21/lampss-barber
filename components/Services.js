const services = [
  ["01", "Corte", "Corte personalizado e acabamento detalhado", "€ XX"],
  ["02", "Corte + Barba", "Corte completo com modelação da barba", "€ XX"],
  ["03", "Barba", "Definição, acabamento e cuidado da barba", "€ XX"],
  ["04", "Corte Premium", "Experiência completa com acabamento premium", "€ XX"]
];

export default function Services() {
  return (
    <section id="servicos" className="border-y border-white/10 bg-[#0d0d0c] py-28 md:py-36">
      <div className="container-site">
        <div className="grid gap-14 md:grid-cols-[.8fr_1.5fr]">
          <div>
            <p className="section-label mb-4">Serviços</p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Escolhe o<br /><span className="gold-gradient">teu estilo.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">Os preços e serviços podem ser alterados diretamente neste ficheiro quando tiveres os valores finais.</p>
          </div>

          <div>
            {services.map(([n, title, desc, price]) => (
              <div key={n} className="group grid grid-cols-[42px_1fr_auto] gap-4 border-t border-white/10 py-7 transition hover:border-[#c9a46a]/50">
                <span className="text-xs text-[#c9a46a]">{n}</span>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-white/40">{desc}</p>
                </div>
                <span className="self-start text-sm font-bold text-white/70">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}