# DetailedDrivers - Global Executive Transportation Landing Page

A premium, luxury landing page for DetailedDrivers, a global executive transportation service. Built with modern web technologies to deliver a sophisticated user experience that matches the brand's commitment to precision and excellence.

## 🌟 Features

### Design & User Experience
- **Luxury Dark Theme**: Professional color palette with deep charcoal (#121212) backgrounds and metallic silver (#A9A9A9) accents
- **Global Brand Positioning**: International coverage across major world cities
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Premium Typography**: Montserrat for headings, Lato for body text

### Interactive Elements
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Hover Interactions**: Sophisticated micro-interactions throughout
- **Form Integration**: Quote request with multiple service options
- **Navigation**: Smooth scrolling and sticky header

### Sections
1. **Hero Section** - Global excellence messaging with instant quote form
2. **Why Choose Us** - 6 key differentiators with animated cards
3. **Services** - 4 core service offerings
4. **Fleet Showcase** - 6 vehicle categories with detailed specs
5. **Global Coverage** - International airports and destinations
6. **Popular Routes** - Major business district connections
7. **FAQ** - Common questions with accordion interface
8. **Contact** - Multiple contact methods and CTA

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/depixed/detaileddrivers-landing.git
cd detaileddrivers-landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
# Build the application
npm run build
# or
yarn build
# or
pnpm build

# Start the production server
npm run start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── ui/               # Shadcn/UI components
│   ├── AnimatedSection.tsx  # Reusable scroll animation wrapper
│   └── RemainingSection.tsx # FAQ, CTA, and Footer sections
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary Background**: #121212 (Deep charcoal)
- **Secondary Background**: #1E1E1E (Lighter dark grey)
- **Text Primary**: #F5F5F5 (Off-white)
- **Text Secondary**: #A0A0A0 (Light grey)
- **Accent**: #A9A9A9 (Metallic silver)
- **Borders**: #333333 (Dark grey)

### Typography
- **Headings**: Montserrat (Bold, 600, 700)
- **Body**: Lato (300, 400, 700)
- **Scale**: Responsive typography with clamp() functions

### Components
- Built with Shadcn/UI for consistency
- Custom styling for luxury brand feel
- Consistent spacing and border radius
- Hover states and transitions

## ⚡ Performance

- **Next.js 15**: Latest performance optimizations
- **Turbopack**: Fast development and build times
- **Image Optimization**: Automatic WebP conversion
- **Font Optimization**: Preloaded Google Fonts
- **CSS Optimization**: Tailwind CSS purging

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/depixed/detaileddrivers-landing)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

**DetailedDrivers** - Global Excellence in Executive Transportation