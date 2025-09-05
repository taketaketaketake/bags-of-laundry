# BOL - Bags Of Laundry 🧺

A modern laundry pickup and delivery service serving Detroit, Michigan and surrounding areas. Built with React Router v7, TypeScript, and TailwindCSS.

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

- **Framework**: React Router v7 (evolution of Remix)
- **Language**: TypeScript with strict configuration
- **Styling**: TailwindCSS v4 with custom brand design system
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
├── routes/                 # File-based routing
│   ├── _marketing.*       # Marketing site layout and pages
│   ├── areas.$slug.tsx    # Dynamic neighborhood pages
│   ├── home.tsx           # Welcome page
│   └── sitemap/robots     # SEO utilities
├── welcome/               # Default React Router components
├── root.tsx              # App shell with meta tags
├── routes.ts             # Route configuration
└── tailwind.css          # Custom styles and design system
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
- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run start` - Start production server

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
- SEO optimization (meta tags, sitemap, robots.txt)
- Brand identity and custom design system
- Service area information and pricing
- Docker containerization
- Production-ready deployment configuration


### Laundry chechout Funnel (5 steps)
- Basic info → pickup location, pickup date, phone
- Order type → wash & fold / dry cleaning / combo
- Add-ons → hang-dry, eco detergent, rush, special notes
- User details → name + email (create/attach customer; no forced login)
- Checkout → save card (setup intent) or pay estimate (payment intent)

### 🚧 In Development
- Customer booking and scheduling system
- User authentication (Supabase integration)
- Payment processing
- Admin dashboard for operations
- Real-time order tracking

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

Built with ❤️ for the Detroit community using React Router and modern web technologies.
