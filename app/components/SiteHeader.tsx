// app/components/SiteHeader.tsx
import { useLocation } from "@remix-run/react";

export default function SiteHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center gap-3 font-bold text-xl text-brand-text hover:no-underline">
            <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="9" r="1" fill="currentColor"/>
              <circle cx="15" cy="9" r="1" fill="currentColor"/>
            </svg>
            <span>Bags of Laundry</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="/services" 
              className={location.pathname === '/services' 
                ? "text-brand-primary font-semibold" 
                : "text-brand-text hover:text-brand-primary transition"
              }
            >
              Services
            </a>
            <a 
              href="/pricing" 
              className={location.pathname === '/pricing' 
                ? "text-brand-primary font-semibold" 
                : "text-brand-text hover:text-brand-primary transition"
              }
            >
              Pricing
            </a>
            <a 
              href="/service-areas" 
              className={location.pathname === '/service-areas' 
                ? "text-brand-primary font-semibold" 
                : "text-brand-text hover:text-brand-primary transition"
              }
            >
              Service Areas
            </a>
            <a 
              href="/how-it-works" 
              className={location.pathname === '/how-it-works' 
                ? "text-brand-primary font-semibold" 
                : "text-brand-text hover:text-brand-primary transition"
              }
            >
              How It Works
            </a>
            <a 
              href="/blog" 
              className={location.pathname === '/' 
                ? "text-brand-primary font-semibold" 
                : "text-brand-text hover:text-brand-primary transition"
              }
            >
              Blog
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="tel:+13135550123" className="btn-ghost">(313) 555-0123</a>
            <a href="/schedule" className="btn">Schedule</a>
          </div>
        </div>
      </div>
    </header>
  );
}