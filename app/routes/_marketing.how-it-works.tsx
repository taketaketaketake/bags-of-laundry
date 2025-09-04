// app/routes/_marketing.how-it-works.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "How It Works | Laundry Pickup & Delivery | Bags of Laundry" },
  { 
    name: "description", 
    content: "See how our laundry pickup & delivery works: schedule, pickup, professional cleaning, and fresh delivery—often within 24 hours. Simple, transparent, and reliable." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "How It Works | Bags of Laundry" },
  { property: "og:description", content: "Schedule pickup, we clean, and deliver back fresh—often within 24 hours. See the full process, FAQs, and what to expect." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399361-6839c7e4a4fa?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/how-it-works" }
];

export default function HowItWorks() {
  return (
    <>
      {/* FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {
                "@type":"Question",
                "name":"How long does the service take?",
                "acceptedAnswer":{"@type":"Answer","text":"Most orders are returned within 24 hours. Same-day is available in select areas based on pickup time and load size."}
              },
              {
                "@type":"Question",
                "name":"Do you offer same-day pickup & delivery?",
                "acceptedAnswer":{"@type":"Answer","text":"Yes, same-day or next-day options may be available. Choose an early pickup window during scheduling to see availability."}
              },
              {
                "@type":"Question",
                "name":"Can I set detergent, temperature, and folding preferences?",
                "acceptedAnswer":{"@type":"Answer","text":"Absolutely. Save your preferences during scheduling—we'll follow them every time unless you change them."}
              },
              {
                "@type":"Question",
                "name":"How are items tracked?",
                "acceptedAnswer":{"@type":"Answer","text":"Each order receives a unique scan ID with item counts/weights. You'll get text updates from pickup to delivery."}
              },
              {
                "@type":"Question",
                "name":"What about stains or delicate garments?",
                "acceptedAnswer":{"@type":"Answer","text":"We pretreat visible stains and follow care labels. For delicate or special-care items, use the Dry Cleaning option or add a note."}
              }
            ]
          })
        }}
      />

      {/* HERO SECTION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero">
            <div className="pill mb-6">Detroit • Pickup & Delivery</div>
            <h1 className="text-3xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              How it works
            </h1>
            <p className="text-lg sub mb-8 leading-relaxed max-w-4xl">
              Skip laundry day in four simple steps. Schedule a pickup, we collect your bag(s), clean to your preferences, and deliver back fresh—often within 24 hours.
              Transparent pricing, text updates, and reliable windows, every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/schedule" className="btn">Schedule Pickup</a>
              <a href="/pricing" className="btn-alt">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* FOUR STEPS */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Four simple steps</h2>
            <div className="grid md:grid-cols-2 gap-8">

              <article className="card p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-black text-brand-primary opacity-10">01</div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" 
                  alt="Scheduling pickup on a phone"
                  className="w-full h-48 object-cover rounded-lg border border-brand-line mb-4"
                />
                <h3 className="text-xl font-bold text-brand-text mb-3">Schedule</h3>
                <p className="sub">Book a pickup window online. Add detergent, temperature, and folding preferences. Choose Wash & Fold or Dry Cleaning.</p>
              </article>

              <article className="card p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-black text-brand-primary opacity-10">02</div>
                <img 
                  src="https://images.unsplash.com/photo-1583016060830-35b0c530c707?q=80&w=1600&auto=format&fit=crop" 
                  alt="Driver picking up laundry bags from doorstep"
                  className="w-full h-48 object-cover rounded-lg border border-brand-line mb-4"
                />
                <h3 className="text-xl font-bold text-brand-text mb-3">Pickup</h3>
                <p className="sub">Place your bag(s) by the door. We scan your order, confirm counts/weights, and send a text update as we head your way.</p>
              </article>

              <article className="card p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-black text-brand-primary opacity-10">03</div>
                <img 
                  src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c85b0?q=80&w=1600&auto=format&fit=crop" 
                  alt="Laundry being cleaned and folded"
                  className="w-full h-48 object-cover rounded-lg border border-brand-line mb-4"
                />
                <h3 className="text-xl font-bold text-brand-text mb-3">Clean</h3>
                <p className="sub">We sort by color/fabric, pretreat visible stains, follow care labels and your saved preferences, then fold or press as requested.</p>
              </article>

              <article className="card p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-black text-brand-primary opacity-10">04</div>
                <img 
                  src="https://images.unsplash.com/photo-1604335399361-6839c7e4a4fa?q=80&w=1600&auto=format&fit=crop" 
                  alt="Neatly folded laundry delivered back to customer"
                  className="w-full h-48 object-cover rounded-lg border border-brand-line mb-4"
                />
                <h3 className="text-xl font-bold text-brand-text mb-3">Deliver</h3>
                <p className="sub">Your clothes return clean, neatly folded, and ready to put away—often within 24 hours. We'll text you as the driver heads over.</p>
              </article>
            </div>
          </div>
        </section>

        {/* TIMELINE & PREP */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Timeline */}
              <div>
                <h2 className="section-title text-brand-text mb-6">Typical timeline</h2>
                <div className="card p-6">
                  <div className="relative pl-8">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-brand-line"></div>
                    
                    <div className="relative mb-6">
                      <div className="absolute left-[-6px] top-1 w-3 h-3 bg-brand-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-brand-text mb-1">0:00 — Booking</h4>
                        <p className="sub text-sm">You choose a pickup window and set preferences.</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="absolute left-[-6px] top-1 w-3 h-3 bg-brand-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-brand-text mb-1">+2–6 hrs — Pickup</h4>
                        <p className="sub text-sm">We collect, scan, and confirm your order with a text.</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="absolute left-[-6px] top-1 w-3 h-3 bg-brand-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-brand-text mb-1">+12–20 hrs — Cleaning & Drying</h4>
                        <p className="sub text-sm">Sorting, washing/drying, pretreating stains, folding or pressing.</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-6px] top-1 w-3 h-3 bg-brand-accent rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-brand-text mb-1">~+24 hrs — Delivery</h4>
                        <p className="sub text-sm">We text before arrival and drop off at your door. Same-day may be available.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prep List */}
              <div>
                <h2 className="section-title text-brand-text mb-6">How to prep your pickup</h2>
                <div className="card p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <span className="sub text-sm">Use any sturdy bag or hamper liner (avoid loose items).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <span className="sub text-sm">Separate Dry Cleaning if possible (or label inside the bag).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <span className="sub text-sm">Note tough stains or special instructions at checkout.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <span className="sub text-sm">Place bags at your door before the window starts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <span className="sub text-sm">Pets at home? Let us know—driver notes help.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED TABLE */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">What's included</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-brand-line rounded-xl overflow-hidden bg-white">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="p-4 text-left text-sm font-bold text-brand-text">Feature</th>
                    <th className="p-4 text-left text-sm font-bold text-brand-text">Wash & Fold</th>
                    <th className="p-4 text-left text-sm font-bold text-brand-text">Dry Cleaning</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Pickup & Delivery</td>
                    <td className="p-4 text-brand-text">Included</td>
                    <td className="p-4 text-brand-text">Included</td>
                  </tr>
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Sorting by color/fabric</td>
                    <td className="p-4 text-green-600 font-bold">✓</td>
                    <td className="p-4 text-green-600 font-bold">✓</td>
                  </tr>
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Stain pretreatment</td>
                    <td className="p-4 text-brand-text">✓ (visible stains)</td>
                    <td className="p-4 text-brand-text">✓ (as needed)</td>
                  </tr>
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Folding/Pressing</td>
                    <td className="p-4 text-brand-text">Neat fold</td>
                    <td className="p-4 text-brand-text">Professional press</td>
                  </tr>
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Turnaround</td>
                    <td className="p-4 text-brand-text">~24 hours (often)</td>
                    <td className="p-4 text-brand-text">~24–48 hours</td>
                  </tr>
                  <tr className="border-t border-brand-line">
                    <td className="p-4 text-brand-text font-medium">Preferences</td>
                    <td className="p-4 sub">Detergent, temp, softener, fold style</td>
                    <td className="p-4 sub">Care labels followed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/pricing" className="btn">See full pricing</a>
              <a href="/schedule" className="btn-alt">Schedule pickup</a>
            </div>
          </div>
        </section>

        {/* TRUST FEATURES */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Real-time updates</h3>
                <p className="sub">We send texts at pickup, cleaning, and delivery so you always know status.</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Eco-friendly options</h3>
                <p className="sub">Sensitive-skin detergents and cold-water cycles available on request.</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Licensed & insured</h3>
                <p className="sub">Your garments are handled by trained pros in secure facilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Frequently asked questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              
              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">How long does it take?</summary>
                <p className="sub mt-3">Most Wash & Fold orders are returned in ~24 hours. Dry cleaning typically takes ~24–48 hours. Same-day may be available with early pickups.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">What happens with stains or delicate items?</summary>
                <p className="sub mt-3">We pretreat visible stains and follow care labels. For delicates or special care, choose Dry Cleaning or leave a note at checkout.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">How do you track orders?</summary>
                <p className="sub mt-3">Every bag receives a scan ID with item counts/weights. You'll get text updates from pickup to delivery.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">Is there a minimum?</summary>
                <p className="sub mt-3">Some areas have per-order minimums or different same-day rules. Full details appear in the scheduler for your ZIP.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">What if I'm not home?</summary>
                <p className="sub mt-3">No problem—set a safe drop-off spot in your instructions. We'll confirm with a photo at delivery.</p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
              <p className="sub mb-8">Start your order now—clean, folded laundry delivered back to your door.</p>
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