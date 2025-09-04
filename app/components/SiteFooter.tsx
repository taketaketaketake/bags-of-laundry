// app/components/SiteFooter.tsx
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-brand-text mb-2">Bags of Laundry</h3>
            <p className="sub text-sm mb-2">Detroit, MI • Mon—Sun 8am—8pm</p>
            <div className="space-y-1">
              <a href="tel:+13135550123" className="text-brand-primary hover:underline text-sm block">(313) 555-0123</a>
              <a href="mailto:hello@bagsoflaundry.com" className="text-brand-primary hover:underline text-sm block">hello@bagsoflaundry.com</a>
            </div>
          </div>
          
          <div>
            <nav className="space-y-2">
              <a href="/pricing" className="block text-sm sub hover:text-brand-primary transition">Pricing</a>
              <a href="/services" className="block text-sm sub hover:text-brand-primary transition">Services</a>
              <a href="/service-areas" className="block text-sm sub hover:text-brand-primary transition">Service Areas</a>
              <a href="/schedule" className="block text-sm sub hover:text-brand-primary transition">Schedule</a>
            </nav>
          </div>
          
          <div>
            <nav className="space-y-2">
              <a href="/privacy" className="block text-sm sub hover:text-brand-primary transition">Privacy</a>
              <a href="/terms" className="block text-sm sub hover:text-brand-primary transition">Terms</a>
              <a href="/contact" className="block text-sm sub hover:text-brand-primary transition">Contact</a>
              <a href="/about" className="block text-sm sub hover:text-brand-primary transition">About</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-brand-line mt-8 pt-8">
          <p className="text-center sub text-sm">© {currentYear} Bags of Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}