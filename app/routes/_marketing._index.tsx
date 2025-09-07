// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Laundry Pickup & Delivery in Detroit | Bags of Laundry" },
  { 
    name: "description", 
    content: "Detroit's fast, reliable laundry pickup & delivery. Start your order above the fold—wash & fold, dry cleaning, and commercial laundry with same-day options." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Laundry Pickup & Delivery in Detroit | Bags of Laundry" },
  { property: "og:description", content: "Start your laundry order above the fold. We pick up, clean, and deliver across Detroit & nearby suburbs." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/" }
];

export default function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-bg">
    

      {/* HERO SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div>
              <div className="pill mb-6">Detroit • Pickup & Delivery</div>
              <h1 className="section-title text-brand-text mb-6">
                Laundry day, done. <span className="text-brand-primary">Start your order.</span>
              </h1>
              <p className="text-lg sub mb-8 leading-relaxed">
                We pick up, professionally clean (wash & fold or dry clean), and deliver back fresh—often within 24 hours. Serving Detroit & nearby suburbs.
              </p>
              
              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Same-day & next-day options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Eco-friendly detergents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Text updates & tracking</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="hero">
              <h2 className="text-xl font-bold text-brand-text mb-6">Start Your Laundry Order</h2>
              <form method="POST" action="/start-basic" className="space-y-4">
                <div>
                  <label htmlFor="addr" className="block text-sm font-semibold text-brand-text mb-2">
                    Pickup Address or ZIP*
                  </label>
                  <input 
                    id="addr" 
                    name="address" 
                    type="text" 
                    placeholder="e.g., 123 Main St or 48226" 
                    required 
                    className="input"
                  />
                  <p className="text-xs sub mt-1">We serve ~30 miles from Downtown Detroit</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-text mb-2">
                      Mobile*
                    </label>
                    <input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="(313) 555-0123" 
                      required 
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-brand-text mb-2">
                      Pickup Date (optional)
                    </label>
                    <input 
                      id="date" 
                      name="date" 
                      type="date" 
                      className="input"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <button className="btn" type="submit">Continue →</button>
                  <a className="btn-alt" href="/pricing">View Pricing</a>
                </div>
                
                <p className="text-xs sub pt-2">
                  By continuing, you agree to our <a href="/terms" className="text-brand-primary hover:underline">Terms</a> & <a href="/privacy" className="text-brand-primary hover:underline">Privacy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BELT */}
      <section className="border-y border-brand-line bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-text font-medium">On-time pickup windows</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-text font-medium">Order tracking & text updates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-text font-medium">Sensitive-skin options</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-brand-text font-medium">Licensed & insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-12">Laundry services made for Detroit</h2>
          <div className="grid md:grid-cols-4 gap-8">
            
            <article className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1400&auto=format&fit=crop" 
                alt="Wash and fold laundry neatly folded"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-text mb-3">Wash & Fold</h3>
                <p className="sub mb-4">Everyday laundry washed, dried, and folded to your preferences—delivered back ready to put away.</p>
                <a className="btn-alt" href="/services#washfold">Learn more</a>
              </div>
            </article>
            
            <article className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop" 
                alt="Dry cleaning garments on hangers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-text mb-3">Dry Cleaning</h3>
                <p className="sub mb-4">Professional care for suits, dresses, uniforms, and delicates—pickup & delivery included.</p>
                <a className="btn-alt" href="/services#drycleaning">Learn more</a>
              </div>
            </article>
            
            <article className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop" 
                alt="Commercial client towels and linens"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-text mb-3">Commercial Laundry</h3>
                <p className="sub mb-4">Reliable solutions for Airbnbs, gyms, salons, restaurants, and offices—volume pricing available.</p>
                <a className="btn-alt" href="/services#commercial">Learn more</a>
              </div>
            </article>

            <article className="card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop" 
                alt="Commercial client towels and linens"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-text mb-3">Commercial Laundry</h3>
                <p className="sub mb-4">Reliable solutions for Airbnbs, gyms, salons, restaurants, and offices—volume pricing available.</p>
                <a className="btn-alt" href="/services#commercial">Learn more</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1583016060830-35b0c530c707?q=80&w=1600&auto=format&fit=crop" 
                alt="Driver picking up laundry bags from customer doorstep"
                className="rounded-xl border border-brand-line w-full shadow-soft"
              />
            </div>
            <div>
              <h2 className="section-title text-brand-text mb-6">How pickup & delivery works</h2>
              <div className="space-y-6 text-brand-text">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Schedule</h3>
                    <p className="sub">Book a pickup window online. Save detergent & folding preferences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">We collect</h3>
                    <p className="sub">Place your bags at the door. We scan, weigh, and track every order.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Fresh delivery</h3>
                    <p className="sub">Clothes return clean and neatly folded—often within 24 hours.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a className="btn" href="/schedule">Schedule Pickup</a>
                <a className="btn-alt" href="/pricing">See Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-6">Where we pick up & deliver</h2>
          <p className="text-center sub mb-12">Serving Detroit and nearby suburbs within ~30 miles of Downtown.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Detroit</h3>
              <p className="sub text-sm mb-4">Downtown, Midtown, Corktown, New Center, Eastern Market</p>
              <div className="flex flex-wrap gap-2">
                <span className="pill">48226</span>
                <span className="pill">48201</span>
                <span className="pill">48216</span>
                <span className="pill">48202</span>
                <span className="pill">48207</span>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Royal Oak</h3>
              <p className="sub text-sm mb-4">Downtown, Woodward Corners, Vinsetta</p>
              <div className="flex flex-wrap gap-2">
                <span className="pill">48067</span>
                <span className="pill">48073</span>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Dearborn</h3>
              <p className="sub text-sm mb-4">East/West Dearborn, Aviation Sub</p>
              <div className="flex flex-wrap gap-2">
                <span className="pill">48124</span>
                <span className="pill">48126</span>
                <span className="pill">48127</span>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">More</h3>
              <p className="sub text-sm mb-4">Ferndale, Grosse Pointe, Warren, Southfield, Troy, Livonia, Canton</p>
              <a className="btn-alt" href="/service-areas">See all areas</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-12">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <blockquote className="card p-6">
              <p className="text-brand-text mb-4">"Pickup right on time and everything came back perfectly folded. Huge time saver."</p>
              <p className="sub text-sm">— Samantha L., Detroit</p>
            </blockquote>
            
            <blockquote className="card p-6">
              <p className="text-brand-text mb-4">"We run an Airbnb and rely on them weekly. Zero misses and excellent communication."</p>
              <p className="sub text-sm">— James R., Host</p>
            </blockquote>
            
            <blockquote className="card p-6">
              <p className="text-brand-text mb-4">"Fair pricing, eco-friendly options, and next-day delivery—five stars."</p>
              <p className="sub text-sm">— Melissa H., Warren</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-12">Frequently asked questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Do you offer same-day service?</h3>
              <p className="sub">Yes—choose an early pickup window and select "same-day" at checkout when available.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Can I set detergent and folding preferences?</h3>
              <p className="sub">Absolutely. Save your preferences in your account or specify them at scheduling—we'll follow them every time.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Do you serve businesses and short-term rentals?</h3>
              <p className="sub">Yes. We handle linens, towels, uniforms, and more with flexible pickups and volume pricing.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">What areas do you cover?</h3>
              <p className="sub">Detroit core and suburbs within ~30 miles: Royal Oak, Dearborn, Ferndale, Grosse Pointe, Warren, Southfield, Troy, Livonia, Canton, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
            <p className="sub mb-8">Start your order now or view transparent pricing.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a className="btn" href="#top-order">Start Order</a>
              <a className="btn-alt" href="/pricing">View Pricing</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}