# Bags Of Laundry 🧺

A laundry pickup and delivery service. Built with Remix, TypeScript, Supabase, and TailwindCSS.

## 🏢 Business Overview

Bags Of Laundry provides convenient laundry services for:
- **Residential customers** - Wash & fold pickup/delivery service
- **Commercial clients** - Gyms, salons, restaurants, and other businesses  
- **Airbnb hosts** - Linen cleaning and turnaround services
- **Subscription customers** - Recurring service with discounts

### Service Areas
Currently serving Detroit neighborhoods including a 20(ish) mile radius.

## 💰 Pricing Structure

### Per-Pound Pricing
- **Standard Rate**: $2.25/lb (next-day delivery)
- **Member Rate**: $1.99/lb (with subscription membership)
- **Minimum Order**: $35

### Per-Bag Pricing
- **Small Bag**: $35 (fits 12-18 lbs)
- **Medium Bag**: $55 (fits 20-30 lbs)
- **Large Bag**: $85 (fits 35-45 lbs)

### Add-ons & Services
- **Rush Service**: +$10 (same-day delivery)
- **Eco-friendly detergent**: +$0.10/lb
- **Hang-dry delicates**: +$0.25/lb
- **Dry cleaning**: From $8/item
- **Bedding bundles**: From $20/bundle

## 🚀 Tech Stack

- **Framework**: Remix v2.17.0 with Vite
- **Language**: TypeScript with strict configuration
- **Styling**: TailwindCSS v3.4.17 with custom brand design system
- **Database**: Supabase (PostgreSQL with SSR support)
- **Authentication**: Supabase Auth with session management
- **UI Components**: Lucide React icons, Tremor React charts
- **Build Tool**: Vite with HMR and optimized builds
- **Deployment**: Netlify with automatic builds

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
│   ├── SiteHeader.tsx    # Main site header with navigation
│   └── Dashboard.tsx     # Customer dashboard component
├── routes/               # File-based routing
│   ├── _marketing.tsx    # Marketing site layout
│   ├── _marketing._index.tsx        # Homepage
│   ├── _marketing.services.tsx      # Services page
│   ├── _marketing.pricing.tsx       # Pricing page (with calculator)
│   ├── _marketing.service-areas.tsx # Service areas page
│   ├── _marketing.how-it-works.tsx  # How it works page
│   ├── _marketing.about.tsx         # About page
│   ├── _marketing.laundry-service-$city.tsx # City-specific pages
│   ├── areas.$slug.tsx             # Dynamic neighborhood pages
│   ├── auth.login.tsx              # User login page
│   ├── auth.signup.tsx             # User registration page
│   ├── auth.logout.tsx             # Logout handler
│   ├── auth.callback.tsx           # OAuth callback
│   ├── dashboard.tsx               # Customer dashboard
│   ├── start-basic.tsx             # Order flow start
│   ├── order-type.tsx              # Order type selection
│   ├── addons.tsx                  # Add-ons selection
│   ├── details.tsx                 # Order details
│   ├── checkout.tsx                # Checkout page
│   ├── dup.tsx                     # Duplicate pricing page
│   ├── dupp.tsx                    # Alternative pricing page
│   ├── sitemap[.]xml.tsx           # XML sitemap
│   └── robots[.]txt.tsx            # Robots.txt
├── utils/                # Utility functions
│   ├── auth.server.ts    # Server-side auth utilities
│   ├── session.server.ts # Session management
│   ├── supabase.server.ts # Server-side Supabase client
│   ├── supabase.client.ts # Client-side Supabase client
│   └── wizard.server.ts  # Order wizard utilities
├── root.tsx             # App shell with meta tags
├── tailwind.css         # Custom styles and design system
└── entry.client.tsx     # Client entry point
public/                  # Static assets
├── _redirects           # Netlify redirects
└── [other static files]
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
- `npm run build` - Create production build using Remix with Vite
- `npm run start` - Start production server (remix-serve)

### Environment Variables
Create a `.env` file in the root directory:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SESSION_SECRET=your_session_secret_key
```

## 🏗 Building for Production

```bash
npm run build
```

This creates optimized bundles in the `build/` directory:
- `build/client/` - Static assets served by CDN
- `build/server/` - Server-side rendered code

## 🚢 Deployment

### Netlify Deployment (Current)

The project is configured for Netlify with:
- **Build Command**: `npm run build`
- **Publish Directory**: `build/client`
- **Redirects**: All routes redirect to `/index.html` for SPA routing

#### Environment Variables (Netlify)
Set these in your Netlify dashboard:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` 
- `SESSION_SECRET`
- `NODE_ENV=production`

#### Deploy via CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=build/client
```

### Supported Platforms
- ✅ **Netlify** (primary deployment target)
- Vercel
- AWS ECS/Fargate
- Google Cloud Run  
- Digital Ocean App Platform
- Fly.io
- Railway

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

#### Marketing Website
- ✅ Responsive design with custom TailwindCSS theme
- ✅ Complete page structure (homepage, services, pricing, service areas, how-it-works, about)
- ✅ Interactive pricing calculator with member toggle
- ✅ SEO optimization (meta tags, sitemap, robots.txt)
- ✅ Service area pages with dynamic neighborhoods
- ✅ Professional design with brand identity

#### Authentication System
- ✅ User registration and login (Supabase Auth)
- ✅ Session management with secure cookies
- ✅ OAuth callback handling
- ✅ Protected routes and dashboard

#### Order Management
- ✅ Multi-step order flow (start-basic → order-type → addons → details → checkout)
- ✅ Order type selection (wash & fold, dry cleaning, combo)
- ✅ Add-ons system (rush service, eco detergent, hang-dry)
- ✅ Customer dashboard component

#### Infrastructure
- ✅ Netlify deployment with automatic builds
- ✅ Supabase integration for database and auth
- ✅ TypeScript throughout the application
- ✅ Vite build system for fast development

### 🚧 In Development

#### Payment System
- 🔄 Stripe integration for checkout
- 🔄 Payment intent and setup intent handling
- 🔄 Subscription management for members

#### Operations
- 🔄 Admin dashboard for order management
- 🔄 Real-time order tracking
- 🔄 Driver app for pickups and deliveries
- 🔄 Automated scheduling system

#### Customer Features
- 🔄 Order history and receipts
- 🔄 Recurring order setup
- 🔄 SMS/email notifications
- 🔄 Customer support chat

## 🌟 Features

- 🚀 **Server-side rendering** for optimal SEO and performance
- ⚡️ **Hot Module Replacement** for fast development
- 📦 **Asset bundling and optimization**
- 🔒 **TypeScript** for type safety
- 🎨 **Custom design system** with TailwindCSS
- 📱 **Responsive design** for all devices
- 🔐 **Authentication** with Supabase Auth
- 🔍 **SEO optimized** with proper meta tags and sitemaps
- 🌐 **Netlify deployment** with automatic builds

## 🚀 Key Pages & Routes

### Marketing Pages
- `/` - Homepage with hero and service overview
- `/services` - Detailed service descriptions
- `/pricing` - Interactive pricing calculator with member toggle
- `/service-areas` - Coverage areas and neighborhoods
- `/how-it-works` - Step-by-step process explanation
- `/about` - Company information and mission

### User Authentication
- `/auth/login` - User sign-in with Supabase Auth
- `/auth/signup` - User registration
- `/auth/logout` - Sign-out handler
- `/dashboard` - Customer account dashboard

### Order Flow
- `/start-basic` - Begin order (pickup details, date, phone)
- `/order-type` - Select service type (wash & fold, dry cleaning, combo)
- `/addons` - Choose add-ons (rush, eco detergent, hang-dry, notes)
- `/details` - Order summary and customer details
- `/checkout` - Payment processing and confirmation

## 🤝 Contributing

This is a business application for Bags Of Laundry Services. For development inquiries or feature requests, please contact the development team.

## 📞 Contact & Support

For business inquiries or technical support, please visit [bagsoflaundry.com](https://bagsoflaundry.com) or contact our customer service team.

---

Built with ❤️ for the Detroit community using Remix, TypeScript, and modern web technologies.
