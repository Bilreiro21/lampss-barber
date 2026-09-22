import { CalendarDays, Instagram, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <section id="marcacoes" className="relative overflow-hidden border-y border-white/10 bg-[#0d0b09] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(201,164,106,.14),transparent_42%)]" />
      <div className="relative mx-auto w-[min(1000px,calc(100%-32px))] text-center">
        <p className="text-[10px] tracking-[.55em] text-[#d6ad6d]">MARCAÇÃO</p>
        <h2 className="mt-6 font-serif text-5xl uppercase leading-none md:text-8xl">
          O próximo<br /><span className="text-[#d6ad6d]">corte começa aqui.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-white/40">
          Entra em contacto e reserva o teu próximo horário.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/351000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#d6ad6d] px-7 py-4 text-[10px] font-black tracking-[.18em] text-black hover:bg-[#edcf98]">
            <MessageCircle size={17} /> WHATSAPP
          </a>
          <a href="https://www.instagram.com/lampss_barber/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-[10px] font-bold tracking-[.18em] hover:border-white/60">
            <Instagram size={17} /> INSTAGRAM
          </a>
          <a href="#marcacoes" className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-[10px] font-bold tracking-[.18em] hover:border-white/60">
            <CalendarDays size={17} /> RESERVAR ONLINE
          </a>
        </div>
      </div>
    </section>
  );
}
