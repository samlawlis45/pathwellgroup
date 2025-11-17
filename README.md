# Pathwell Group Website

A modern, responsive website for Pathwell Group built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage** with hero section, model overview, industries served, and featured solutions
- **Solutions Pages** organized by:
  - Offering: Connect, Logistics, Technology
  - Customer Type: Shippers, Retail/E-Commerce, Manufacturers, Carriers, 3PL/Brokers
- **About Page** with company information and approach
- **Why Pathwell** page highlighting the integrated model
- **Insights Page** with blog structure for case studies, blog posts, and whitepapers
- **Contact Page** with form and contact information
- **Responsive Design** optimized for all device sizes
- **Modern UI** with clean, corporate design using the Pathwell blue (#42B0D5)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
PathwellGroup/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── insights/       # Insights/blog page
│   ├── solutions/      # Solutions pages
│   │   ├── connect/    # Pathwell Connect
│   │   ├── logistics/  # Pathwell Logistics
│   │   ├── technology/ # Technology services
│   │   ├── shippers/   # Shipper solutions
│   │   ├── retail/     # Retail solutions
│   │   ├── manufacturers/ # Manufacturer solutions
│   │   ├── carriers/   # Carrier solutions
│   │   └── 3pl/        # 3PL solutions
│   ├── why-pathwell/   # Why Pathwell page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Nav.tsx         # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── Container.tsx   # Container wrapper
└── package.json
```

## Design System

- **Primary Color**: #42B0D5 (Pathwell Blue)
- **Typography**: Inter (Google Fonts)
- **Style**: Corporate, minimal, strong typography

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme.

### Content

All page content is in the respective page files under `app/`. Update text, add images, or modify layouts as needed.

### Navigation

Update the navigation menu in `components/Nav.tsx`.

## Next Steps

1. Add actual content and case studies to the Insights page
2. Add images and graphics throughout the site
3. Connect the contact form to a backend service
4. Add analytics tracking
5. Implement SEO optimizations
6. Add leadership profiles to the About page

## License

Copyright © 2024 Pathwell Group. All rights reserved.

