# ✂️ LAMPS BARBER

> Website oficial da **Lamps Barber** — barbearia moderna no Barreiro, focada em estilo, qualidade e atitude.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

---

## 📋 Sobre

Website one-page desenvolvido para a **Lamps Barber**, uma barbearia localizada na Rua Dom João de Castro 38, Barreiro. O site apresenta os serviços, galeria de trabalhos, informações de contacto e sistema de marcação de horários.

## 🛠️ Tech Stack

| Tecnologia | Versão | Utilização |
|---|---|---|
| **Next.js** | 16 | Framework React com SSR |
| **React** | 19 | Biblioteca de UI |
| **Tailwind CSS** | 4 | Estilização utility-first |
| **Framer Motion** | 12 | Animações e transições |
| **Lucide React** | — | Ícones SVG |

## 📁 Estrutura do Projeto

```
lampss-barber/
├── app/
│   ├── globals.css        # Estilos globais e design tokens
│   ├── layout.js          # Layout principal (metadata, fontes)
│   └── page.js            # Página principal (composição)
├── components/
│   ├── Navbar.js          # Navegação fixa com scroll
│   ├── Hero.js            # Secção hero com animações
│   ├── About.js           # Sobre a barbearia
│   ├── Services.js        # Lista de serviços
│   ├── ServicesPreview.js  # Pré-visualização de serviços
│   ├── Work.js            # Galeria de trabalhos
│   ├── Booking.js         # Marcação de horários
│   └── Footer.js          # Rodapé com contactos
├── public/
│   └── images/            # Assets (logo, fotos)
└── package.json
```

## 🚀 Começar

### Pré-requisitos

- **Node.js** 18+
- **npm** ou **yarn**

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-user/lampss-barber.git
cd lampss-barber

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`.

### Produção

```bash
# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🖼️ Imagens

Coloca as fotografias na pasta `public/images/`:

| Ficheiro | Descrição |
|---|---|
| `logo.jpg` | Logótipo da barbearia |
| `barber.jpg` | Foto do barbeiro |
| `work-01.jpg` | Galeria — Trabalho 1 |
| `work-02.jpg` | Galeria — Trabalho 2 |
| `work-03.jpg` | Galeria — Trabalho 3 |
| `work-04.jpg` | Galeria — Trabalho 4 |

> **Nota:** O site funciona sem as imagens, apresentando placeholders.

## 📍 Informações

- **Morada:** R. Dom João de Castro 38, Barreiro, 2830-186
- **Horário:** Terça a Sábado, 09:00 — 20:00
- **Folgas:** Domingo e Segunda-feira
- **Instagram:** [@lampss_barber](https://www.instagram.com/lampss_barber/)

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados © 2025 Lamps Barber.
