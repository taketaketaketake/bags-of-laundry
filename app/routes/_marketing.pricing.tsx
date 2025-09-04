// app/routes/_marketing.pricing.tsx
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => [
  { title: "Pricing | Laundry Pickup & Delivery in Detroit | Bags Of Laundry" },
  { 
    name: "description", 
    content: "Simple, transparent pricing from Bags Of Laundry. $2.25/lb standard, $1.99/lb with weekly plan. $35 minimum, rush & add-ons available. Start your order today." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Pricing | Bags Of Laundry" },
  { property: "og:description", content: "Detroit laundry pickup & delivery. $2.25/lb standard or $1.99/lb weekly. See add-ons, minimums, and commercial rates." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/pricing" }
];

export default function Pricing() {
  useEffect(() => {
    // Price calculator functionality
    const calculatePrice = () => {
      const lbsInput = document.getElementById('lbs') as HTMLInputElement;
      const planSelect = document.getElementById('plan') as HTMLSelectElement;
      const rushCheckbox = document.getElementById('rush') as HTMLInputElement;
      const ecoCheckbox = document.getElementById('eco') as HTMLInputElement;
      const hangCheckbox = document.getElementById('hang') as HTMLInputElement;
      const estElement = document.getElementById('est');

      if (!lbsInput || !planSelect || !rushCheckbox || !ecoCheckbox || !hangCheckbox || !estElement) return;

      const lbs = Math.max(0, parseFloat(lbsInput.value) || 0);
      const rate = parseFloat(planSelect.value) || 2.25;
      const rush = rushCheckbox.checked ? 10 : 0;
      const eco = ecoCheckbox.checked ? 0.10 : 0;
      const hang = hangCheckbox.checked ? 0.25 : 0;

      let subtotal = lbs * (rate + eco + hang) + rush;
      if (subtotal < 35) subtotal = 35; // minimum

      estElement.textContent = `$${subtotal.toFixed(2)}`;
    };

    // Add event listeners
    const inputs = ['lbs', 'plan', 'rush', 'eco', 'hang'];
    inputs.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', calculatePrice);
        element.addEventListener('change', calculatePrice);
      }
    });

    // Initial calculation
    calculatePrice();

    // Cleanup
    return () => {
      inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.removeEventListener('input', calculatePrice);
          element.removeEventListener('change', calculatePrice);
        }
      });
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero">
            <div className="pill mb-6">Bags Of Laundry • Detroit</div>
            <h1 className="text-3xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-lg sub mb-8 leading-relaxed max-w-4xl">
              Laundry day should be easy. We price the way we operate—no surprises, no gotchas. Pick <strong className="text-brand-text">per-pound</strong> or a <strong className="text-brand-text">flat-rate bag</strong>, add rush or preferences if you want, and we'll take it from there.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/schedule" className="btn">Start an Order</a>
              <a href="/services" className="btn-alt">See Services</a>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* CORE PRICING */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Per-pound pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">

              {/* Standard */}
              <article className="card p-6">
                <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Standard (next-day)</h3>
                <p className="mb-4">
                  <span className="text-4xl font-black text-brand-text">$2.25</span> 
                  <span className="text-sm font-semibold sub ml-1">per lb</span>
                </p>
                <p className="sub mb-4">Clean, folded, and delivered in ~24 hours. Perfect for most households.</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Reliable pickup windows</li>
                  <li>• Text updates & contactless options</li>
                  <li>• Detergent & folding preferences saved</li>
                </ul>
                <a href="/schedule" className="btn mb-3 block text-center">Schedule Pickup</a>
                <p className="text-xs sub">Order minimum: $35</p>
              </article>

              {/* Weekly plan */}
              <article className="card p-6">
                <div className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                  Best Value
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Weekly / Bi-weekly plan</h3>
                <p className="mb-4">
                  <span className="text-4xl font-black text-brand-text">$1.99</span> 
                  <span className="text-sm font-semibold sub ml-1">per lb</span>
                </p>
                <p className="sub mb-4">Lock in a route day and save. Great for families and busy professionals.</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Same driver window each week</li>
                  <li>• Automatic reminders</li>
                  <li>• Easy vacation pause</li>
                </ul>
                <a href="/schedule?plan=weekly" className="btn mb-3 block text-center">Choose Plan</a>
                <p className="text-xs sub">Order minimum: $35</p>
              </article>

              {/* Rush */}
              <article className="card p-6">
                <div className="inline-block bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                  When you're in a hurry
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Same-day rush</h3>
                <p className="mb-4">
                  <span className="text-4xl font-black text-brand-text">+$10</span> 
                  <span className="text-sm font-semibold sub ml-1">or +$0.25/lb</span>
                </p>
                <p className="sub mb-4">Early pickups qualify for rush in select areas. See availability at checkout.</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Morning pickup, evening delivery (typical)</li>
                  <li>• Limited capacity—first come, first served</li>
                </ul>
                <a href="/schedule?rush=true" className="btn-alt mb-3 block text-center">Check Availability</a>
                <p className="text-xs sub">Rush not guaranteed on holidays or peak days</p>
              </article>
            </div>
          </div>
        </section>

        {/* BAG PRICING */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-6">Flat-rate bag pricing (optional)</h2>
            <p className="text-center sub mb-12">Prefer a simple bag price? Pick a size and stuff it—<strong className="text-brand-text">bags must close</strong> so everyone gets a fair deal.</p>
            <div className="grid md:grid-cols-3 gap-8">
              
              <article className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">Small Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$35</span>
                </p>
                <p className="sub mb-4">Fits ~12–18 lb</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Everyday loads</li>
                  <li>• Singles & light weeks</li>
                </ul>
                <a href="/schedule?bag=small" className="btn-alt block text-center">Use Small</a>
              </article>
              
              <article className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">Medium Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$55</span>
                </p>
                <p className="sub mb-4">Fits ~20–30 lb</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Family-friendly</li>
                  <li>• Best value</li>
                </ul>
                <a href="/schedule?bag=medium" className="btn-alt block text-center">Use Medium</a>
              </article>
              
              <article className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">Large Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$85</span>
                </p>
                <p className="sub mb-4">Fits ~35–45 lb</p>
                <ul className="sub text-sm mb-6 space-y-2 pl-4">
                  <li>• Linen & towel heavy weeks</li>
                  <li>• Households & hosts</li>
                </ul>
                <a href="/schedule?bag=large" className="btn-alt block text-center">Use Large</a>
              </article>
            </div>
            <p className="text-xs sub text-center mt-8">Open-bag / overstuffed fee: $10 (we'll text first). Bag capacity estimates vary by fabric and size.</p>
          </div>
        </section>

        {/* ADD-ONS & SMALL PRINT */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Add-ons</h3>
                <ul className="sub space-y-2 pl-4">
                  <li>• Hypoallergenic / eco detergent <strong className="text-brand-text">+$0.10/lb</strong></li>
                  <li>• Hang-dry delicates <strong className="text-brand-text">+$0.25/lb</strong></li>
                  <li>• Bedding bundle (duvet/comforter) <strong className="text-brand-text">from $20</strong></li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Minimums & fees</h3>
                <ul className="sub space-y-2 pl-4">
                  <li>• Order minimum <strong className="text-brand-text">$35</strong></li>
                  <li>• Missed pickup window <strong className="text-brand-text">$7</strong></li>
                  <li>• Extended zone (if applicable) <strong className="text-brand-text">$3–5</strong></li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">What's included</h3>
                <ul className="sub space-y-2 pl-4">
                  <li>• Pickup & delivery</li>
                  <li>• Sorting by color/fabric</li>
                  <li>• Visible stain pretreat</li>
                  <li>• Neat fold or garment press</li>
                  <li>• Text updates & photo proof (as requested)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE CALCULATOR */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-6">Quick estimate</h2>
            <p className="text-center sub mb-12">Enter your best guess in pounds — an average family load is ~8–12 lb. This isn't a quote; exact totals show at checkout.</p>
            
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-8">
                
                <div>
                  <label htmlFor="lbs" className="block text-sm font-bold text-brand-text mb-2">Estimated pounds</label>
                  <input 
                    id="lbs" 
                    type="number" 
                    min="1" 
                    defaultValue="20"
                    className="input"
                  />
                  <p className="text-xs sub mt-2">Tip: 1 kitchen trash bag ≈ 12–18 lb</p>
                </div>
                
                <div>
                  <label htmlFor="plan" className="block text-sm font-bold text-brand-text mb-2">Plan</label>
                  <select id="plan" className="input">
                    <option value="2.25">Standard $2.25/lb</option>
                    <option value="1.99">Weekly $1.99/lb</option>
                  </select>
                  
                  <div className="space-y-3 mt-4">
                    <label className="flex items-center gap-3">
                      <input id="rush" type="checkbox" className="rounded" />
                      <span className="text-xs sub">Add rush (+$10)</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input id="eco" type="checkbox" className="rounded" />
                      <span className="text-xs sub">Eco detergent (+$0.10/lb)</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input id="hang" type="checkbox" className="rounded" />
                      <span className="text-xs sub">Hang-dry (+$0.25/lb)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <div className="pill mb-3">Estimated total</div>
                    <p id="est" className="text-3xl font-black text-brand-text mb-2">$—</p>
                    <p className="text-xs sub mb-4">Includes $35 minimum if applicable. Taxes not included.</p>
                    <a href="/schedule" className="btn block text-center">Schedule Pickup</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMERCIAL PRICING */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <h2 className="section-title text-brand-text mb-6">Commercial pricing</h2>
                <p className="sub mb-6 leading-relaxed">
                  Running an Airbnb portfolio, gym, spa, restaurant, or clinic? We build simple, volume-based quotes with dedicated pickup windows and delivery manifests.
                </p>
                <ul className="sub mb-8 space-y-2 pl-4">
                  <li>• Recurring routes (weekly or multi-week)</li>
                  <li>• Inventory counts & bag barcodes</li>
                  <li>• Preferred turnaround & rush capacity</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn">Talk to Sales</a>
                  <a href="/service-areas" className="btn-alt">Check Coverage</a>
                </div>
              </div>
              
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border border-brand-line rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="p-4 text-left text-sm font-bold text-brand-text">Approx. weekly volume</th>
                        <th className="p-4 text-left text-sm font-bold text-brand-text">Indicative rate</th>
                        <th className="p-4 text-left text-sm font-bold text-brand-text">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-t border-brand-line">
                        <td className="p-4 text-brand-text">50–100 lb</td>
                        <td className="p-4 text-brand-text">$2.05–$2.15/lb</td>
                        <td className="p-4 sub">Standard next-day</td>
                      </tr>
                      <tr className="border-t border-brand-line">
                        <td className="p-4 text-brand-text">100–250 lb</td>
                        <td className="p-4 text-brand-text">$1.90–$2.05/lb</td>
                        <td className="p-4 sub">Route day required</td>
                      </tr>
                      <tr className="border-t border-brand-line">
                        <td className="p-4 text-brand-text">250+ lb</td>
                        <td className="p-4 text-brand-text">Custom</td>
                        <td className="p-4 sub">Dedicated windows</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs sub mt-4">Final pricing depends on mix (towels/linens), bagging, and turnaround needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Pricing FAQ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Why do you have a $35 minimum?</h3>
                <p className="sub">Each pickup has fixed costs (driver time, routing, supplies). The minimum keeps things fair for small loads.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">How accurate is the estimator?</h3>
                <p className="sub">It's meant to help you budget. Your final total is based on actual weight and options chosen at checkout.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Do you charge extra for far suburbs?</h3>
                <p className="sub">Some extended zones have a small $3–5 fee. Enter your ZIP during scheduling to see details.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Can I switch between per-pound and bag pricing?</h3>
                <p className="sub">Yep—choose whatever is better for your load that day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
              <p className="sub mb-8">Book a pickup in minutes. We'll handle the rest.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/schedule" className="btn">Schedule Pickup</a>
                <a href="/services" className="btn-alt">Explore Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}