// app/routes/_marketing.services.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Laundry Services | Pickup & Delivery in Detroit | Bags of Laundry" },
  { 
    name: "description", 
    content: "Laundry pickup & delivery across Detroit and nearby suburbs. Wash & fold, dry cleaning, and commercial laundry with fast turnaround. Start your order today." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Laundry Services | Bags of Laundry" },
  { property: "og:description", content: "Pickup & delivery laundry service: wash & fold, dry cleaning, and commercial solutions across Metro Detroit." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/services" }
];

export default function Services() {
  return (
    <>
      <main>
        {/* SERVICE CARDS */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">What we offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Pickup & Delivery */}
              <article className="card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583016060830-35b0c530c707?q=80&w=1600&auto=format&fit=crop" 
                  alt="Driver picking up laundry bag"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                    Core Service
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Pickup & Delivery Laundry</h3>
                  <p className="sub mb-4">
                    Door-to-door laundry service across Detroit & suburbs. Choose your pickup window, set preferences, 
                    and we do the rest. Most orders return in ~24 hours.
                  </p>
                  <ul className="sub text-sm mb-6 space-y-1 pl-4">
                    <li>• Reliable time windows & text updates</li>
                    <li>• Safe doorstep handoff or contactless</li>
                    <li>• Per-bag or per-pound pricing</li>
                  </ul>
                  <a href="/schedule" className="btn">Start an Order</a>
                </div>
              </article>

              {/* Wash & Fold */}
              <article className="card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1600&auto=format&fit=crop" 
                  alt="Neatly folded laundry"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-teal-100 text-brand-accent border border-teal-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                    Everyday
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Wash & Fold</h3>
                  <p className="sub mb-4">
                    Everyday clothing washed, dried, and folded to your preferences—delivered back ready to put away.
                  </p>
                  <ul className="sub text-sm mb-6 space-y-1 pl-4">
                    <li>• Detergent, temperature, softener, & fold style options</li>
                    <li>• Stain pretreatment for visible spots</li>
                    <li>• Family & weekly plans available</li>
                  </ul>
                  <a href="/pricing" className="btn-alt">See Pricing</a>
                </div>
              </article>

              {/* Dry Cleaning */}
              <article className="card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop" 
                  alt="Garments on hangers"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-red-100 text-brand-secondary border border-red-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                    Garments
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Dry Cleaning Pickup & Delivery</h3>
                  <p className="sub mb-4">
                    Professional cleaning and pressing for suits, dresses, uniforms, and delicates—pickup & delivery included.
                  </p>
                  <ul className="sub text-sm mb-6 space-y-1 pl-4">
                    <li>• Care labels followed</li>
                    <li>• Protective packaging on return</li>
                    <li>• Turnaround ~24–48 hours</li>
                  </ul>
                  <a href="#faq" className="btn-alt">What's included</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* COMMERCIAL LAUNDRY */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" 
                  alt="Commercial towels and linens"
                  className="rounded-xl border border-brand-line w-full shadow-soft"
                />
              </div>
              <div>
                <h2 className="section-title text-brand-text mb-6">Commercial Laundry</h2>
                <p className="sub mb-6 leading-relaxed">
                  Reliable recurring pickups for <strong className="text-brand-text">short-term rentals</strong>, 
                  <strong className="text-brand-text"> gyms & studios</strong>, <strong className="text-brand-text">salons & spas</strong>, 
                  <strong className="text-brand-text"> restaurants & caterers</strong>, <strong className="text-brand-text">medical/dental</strong>, 
                  and <strong className="text-brand-text"> offices</strong>. Volume pricing and custom scheduling available.
                </p>
                <ul className="sub mb-8 space-y-2 pl-4">
                  <li>• Linens, towels, uniforms, kitchen & front-of-house textiles</li>
                  <li>• Weekly, bi-weekly, or custom routes</li>
                  <li>• Inventory tracking & delivery manifests</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn">Talk to Sales</a>
                  <a href="/pricing" className="btn-alt">Commercial Pricing</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS & PREFERENCES */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Add-ons & preferences</h2>
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Eco-friendly</h3>
                <p className="sub">Sensitive-skin detergents and cold-water cycles available.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Hang-dry</h3>
                <p className="sub">We'll hang-dry delicates or activewear on request.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Special care</h3>
                <p className="sub">Label garments or leave notes for stain treatment or fold style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING TEASER */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Simple, transparent pricing</h2>
                <p className="sub mb-6">No surprises. Per-bag or per-pound options for homes and businesses.</p>
                <a href="/pricing" className="btn">See Full Pricing</a>
              </div>
              
              <div className="card p-8">
                <div className="pill mb-4">Wash & Fold</div>
                <p className="text-3xl font-black text-brand-text mb-2">
                  $2.25 <span className="text-base font-semibold sub">per lb</span>
                </p>
                <p className="sub">Minimums may apply. Same-day available.</p>
              </div>
              
              <div className="card p-8">
                <div className="pill mb-4">Dry Cleaning</div>
                <p className="text-3xl font-black text-brand-text mb-2">
                  From $8 <span className="text-base font-semibold sub">per item</span>
                </p>
                <p className="sub">See garment price list on the pricing page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS TEASER */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-6">Where we pick up & deliver</h2>
            <p className="text-center sub mb-8">Detroit and nearby suburbs within ~30 miles of Downtown.</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48226</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48201</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48216</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48202</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48207</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48212</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48067</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48073</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48124</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48126</span>
              <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">48127</span>
            </div>
            <div className="text-center">
              <a href="/service-areas" className="btn-alt">See all service areas</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Services FAQ</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">How does pickup & delivery work?</h3>
                <p className="sub">Choose a window, place bags at your door, and we'll text updates. Most orders are returned in ~24 hours.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Do you offer same-day?</h3>
                <p className="sub">Yes in select areas. Choose an early pickup; availability appears at checkout.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Can I set preferences?</h3>
                <p className="sub">Yes—detergent, temperature, softener, fold style, and hang-dry can be saved to your profile.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Is there a minimum?</h3>
                <p className="sub">Some areas have order minimums; you'll see them after entering your ZIP during scheduling.</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/schedule" className="btn">Start an Order</a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
              <p className="sub mb-8">Start your pickup now or view transparent pricing.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/schedule" className="btn">Schedule Pickup</a>
                <a href="/pricing" className="btn-alt">View Pricing</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
