# BOL - Bags Of Laundry 🧺

A modern laundry pickup and delivery service serving Detroit, Michigan and surrounding areas. Built with Remix, TypeScript, and TailwindCSS.

## 🏢 Business Overview

BOL provides convenient laundry services for:
- **Residential customers** - Wash & fold pickup/delivery
- **Commercial clients** - Gyms, salons, and other businesses  
- **Airbnb hosts** - Linen cleaning and turnaround services
- **Subscription customers** - Weekly/bi-weekly recurring service

### Service Areas
Currently serving Detroit neighborhoods including:
- Downtown Detroit
- Midtown
- Corktown
- New Center
- Eastern Market
- And surrounding areas

## 💰 Pricing Structure

- **Standard Service**: $2.25/lb (next-day delivery)
- **Weekly/Bi-weekly**: $1.99/lb (subscription discount)
- **Same-day Rush**: Standard rate + $10 surcharge
- **Commercial Tiers**: Volume-based pricing available

## 🚀 Tech Stack

- **Framework**: Remix v2.17.0
- **Language**: TypeScript with strict configuration
- **Styling**: TailwindCSS v3 with custom brand design system
- **Database**: Supabase (PostgreSQL with real-time capabilities)
- **Build Tool**: Vite for fast development and optimized builds
- **Runtime**: Node.js 20+ (Docker containerized)

## 🎨 Design System

Custom brand identity featuring:
- **Primary Colors**: Warm orange (`#FF9C3F`) and deep orange (`#F97316`)
- **Accent Colors**: Coral red (`#FF6B6B`) and teal (`#2EC4B6`)  
- **Background**: Warm cream (`#FFF7EE`)
- **Typography**: Inter font family with multiple weights
- **Components**: Custom buttons, cards, pills, and responsive layouts

## 📁 Project Structure

```
app/
├── components/            # Reusable UI components
│   ├── SiteHeader.tsx    # Main site header
│   └── SiteFooter.tsx    # Main site footer
├── routes/               # File-based routing
│   ├── _marketing.tsx    # Marketing site layout
│   ├── _marketing._index.tsx        # Homepage
│   ├── _marketing.services.tsx      # Services page
│   ├── _marketing.pricing.tsx       # Pricing page
│   ├── _marketing.service-areas.tsx # Service areas page
│   ├── _marketing.how-it-works.tsx  # How it works page
│   ├── areas.$slug.tsx             # Dynamic neighborhood pages
│   ├── sitemap[.]xml.tsx           # XML sitemap
│   └── robots[.]txt.tsx            # Robots.txt
├── welcome/              # Default Remix welcome components
├── root.tsx             # App shell with meta tags
├── routes.ts            # Route configuration
├── tailwind.css         # Custom styles and design system
└── app.css              # Additional styles
htmlfiles/               # Legacy HTML files (archived)
```

## 🛠 Development

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Your application will be available at `http://localhost:5173`.

### Available Scripts
- `npm run dev` - Start development server with HMR (remix vite:dev)
- `npm run build` - Create production build (remix vite:build)
- `npm run start` - Start production server (remix-serve)

## 🏗 Building for Production

```bash
npm run build
```

## 🚢 Deployment

### Docker Deployment

Build and run the containerized application:

```bash
# Build image
docker build -t bol-laundry .

# Run container
docker run -p 3000:3000 bol-laundry
```

### Supported Platforms
- AWS ECS/Fargate
- Google Cloud Run  
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel
- Netlify

### Manual Deployment

Deploy the build output:
```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## 🔧 Configuration

### Environment Variables
Configure your environment for different deployment targets:
- Database connection strings
- API keys for third-party services
- Domain configuration

### Database Setup
The project is configured for Supabase but can work with any PostgreSQL database:
1. Create a Supabase project
2. Set up your connection string
3. Run migrations (when implemented)

## 📋 Current Status

### ✅ Completed Features
- Marketing website with responsive design
- Complete page structure (homepage, services, pricing, service areas, how-it-works)
- Shared layout system with header and footer components
- SEO optimization (meta tags, sitemap, robots.txt)
- Brand identity and custom design system with TailwindCSS
- Service area information and pricing displays
- Docker containerization
- Production-ready deployment configuration

### 🚧 In Development
- Customer booking and scheduling system
- User authentication (Supabase integration)
- Payment processing
- Admin dashboard for operations
- Real-time order tracking

### 📁 Legacy Files
- `htmlfiles/` directory contains archived HTML prototypes

## 🌟 Features

- 🚀 **Server-side rendering** for optimal SEO and performance
- ⚡️ **Hot Module Replacement** for fast development
- 📦 **Asset bundling and optimization**
- 🔒 **TypeScript** for type safety
- 🎨 **Custom design system** with TailwindCSS
- 📱 **Responsive design** for all devices
- 🐳 **Docker ready** for easy deployment
- 🔍 **SEO optimized** with proper meta tags and sitemaps

## 🤝 Contributing

This is a business application for BOL Laundry Services. For development inquiries or feature requests, please contact the development team.

---

Built with ❤️ for the Detroit community using Remix and modern web technologies.