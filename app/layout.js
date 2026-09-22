import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "LAMPSS BARBER — Barbering & Style",
  description: "Lampss Barber — cortes, barba e estilo. Marcações e portfólio.",
  keywords: ["Lampss Barber", "barbeiro", "barbearia", "barber", "haircut", "fade"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}