# Maison de Choco - Link Tree

A beautiful, responsive link tree web application built with Next.js for connecting with Maison de Choco on various social media platforms.

## Features

- 🎨 Modern, elegant design with gradient backgrounds
- 📱 Fully responsive layout
- 🌙 Dark mode support
- 🔗 Links to:
  - Instagram
  - Facebook
  - TikTok
  - Phone contact

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Customization

To customize the social media links, edit the `app/page.tsx` file:

- Update the `href` attributes in the Link components to point to your actual social media profiles
- Replace the phone number in the Phone button's `href` attribute
- Customize colors, fonts, and styling in the Tailwind CSS classes

### Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Turbopack

## Project Structure

```
maison de choco/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with link tree
│   └── globals.css      # Global styles
├── .github/
│   └── copilot-instructions.md
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.ts       # Next.js configuration
```

## License

This project is private and proprietary to Maison de Choco.

---

**Built with ❤️ using Next.js**
# maison-de-choco
