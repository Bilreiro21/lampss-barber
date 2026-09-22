import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Lamp's Barber | Barbeiro",
  description: "Lampss Barber — cortes, barba e estilo. Marcações e portfólio.",
  keywords: ["Lampss Barber", "barbeiro", "barbearia", "barber", "haircut", "fade"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}