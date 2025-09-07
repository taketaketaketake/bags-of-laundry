// app/routes/_marketing.pricing.tsx
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => [
  { title: "Pricing | Laundry Pickup & Delivery in Detroit | Bags Of Laundry" },
  { 
    name: "description", 
    content: "Simple, transparent pricing from Bags Of Laundry. $2.25/lb standard, $1.99/lb with membership. $35 minimum, rush & add-ons available. Start your order today." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Pricing | Bags Of Laundry" },
  { property: "og:description", content: "Detroit laundry pickup & delivery. $2.25/lb standard or $1.99/lb with membership. See add-ons, minimums, and commercial rates." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/pricing" }
];

export default function Pricing() {
  const [isMember, setIsMember] = useState(false);
  const memberRate = 1.99;
  const standardRate = 2.25;
  const currentRate = isMember ? memberRate : standardRate;

  useEffect(() => {
    // Price calculator functionality
    const calculatePrice = () => {
      const lbsInput = document.getElementById('lbs') as HTMLInputElement;
      const rushCheckbox = document.getElementById('rush') as HTMLInputElement;
      const ecoCheckbox = document.getElementById('eco') as HTMLInputElement;
      const hangCheckbox = document.getElementById('hang') as HTMLInputElement;
      const estElement = document.getElementById('est');

      if (!lbsInput || !rushCheckbox || !ecoCheckbox || !hangCheckbox || !estElement) return;

      const lbs = Math.max(0, parseFloat(lbsInput.value) || 0);
      const rate = currentRate;
      const rush = rushCheckbox.checked ? 10 : 0;
      const eco = ecoCheckbox.checked ? 0.10 : 0;
      const hang = hangCheckbox.checked ? 0.25 : 0;

      let subtotal = lbs * (rate + eco + hang) + rush;
      if (subtotal < 35) subtotal = 35; // minimum

      estElement.textContent = `$${subtotal.toFixed(2)}`;
    };

    // Add event listeners
    const inputs = ['lbs', 'rush', 'eco', 'hang'];
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
  }, [currentRate]);

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
              Laundry day should be easy. We price the way we operate—no surprises, no gotchas. Choose <strong className="text-brand-text">per-pound</strong> or a <strong className="text-brand-text">flat-rate bag</strong>, add rush or preferences if you want, and we'll take it from there.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/schedule" className="btn">Start an Order</a>
              <a href="/services" className="btn-alt">See Services</a>
            </div>

            
            {isMember && (
              <div className="mt-3 text-sm text-green-600 font-medium">
                🎉 Save $0.26 per pound with membership!
              </div>
            )}
          </div>
        </div>
      </section>


      <main>    
  {/* CORE PRICING */}
  <section className="py-16 lg:py-20 bg-brand-bg">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title text-left text-brand-text mb-6">
        Per-pound pricing
      </h2>

      {/* Member Toggle */}
      <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-sm border-2 border-gray-200 mb-6">
        <button
          type="button"
          onClick={() => setIsMember(false)}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
            !isMember
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Standard Pricing
        </button>
        <button
          type="button"
          onClick={() => setIsMember(true)}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
            isMember
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Member Pricing
        </button>
      </div>

      <p className="text-left sub mb-12">
        <span className="text-3xl font-bold text-blue-600">${currentRate}</span>
        <span className="text-gray-600 ml-2">per pound</span>
        {!isMember && (
          <span className="ml-2 text-sm text-green-600 font-medium">
            (Save $0.26/lb with membership!)
          </span>
        )}
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* 10 lbs */}
        <article className="card p-6 text-left">
        <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-2">10 pounds</h3>
          <p className="mb-4">
            <span className="text-3xl font-black text-brand-text">
              ${(10 * currentRate).toFixed(2)}
            </span>
          </p>
          <p className="sub mb-4">Perfect for weekly maintenance loads</p>
          <ul className="sub text-sm mb-6 space-y-2">
            <li>• Individual or light weekly loads</li>
            <li>• 24-hour turnaround</li>
            <li>• Professional wash, dry, and fold</li>
          </ul>
          <a href="/schedule?bag=small" className="btn-alt block text-left">Choose Small Bag</a>
        </article>

        {/* 20 lbs */}
        <article className="card p-6 text-left">
          <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-2">20 pounds</h3>
          <p className="mb-4">
            <span className="text-3xl font-black text-brand-text">
              ${(20 * currentRate).toFixed(2)}
            </span>
          </p>
          <p className="sub mb-4">Perfect for families and couples</p>
          <ul className="sub text-sm mb-6 space-y-2">
            <li>• Most requested service size</li>
            <li>• Regular laundry needs</li>
            <li>• Best value for most households</li>
          </ul>
          <a href="/schedule?bag=small" className="btn-alt block text-left">Choose Small Bag</a>
          </article>

        {/* 30 lbs */}
        <article className="card p-6 text-left">
        <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-2">30 pounds</h3>
          <p className="mb-4">
            <span className="text-3xl font-black text-brand-text">
              ${(30 * currentRate).toFixed(2)}
            </span>
          </p>
          <p className="sub mb-4">Best value for large households</p>
          <ul className="sub text-sm mb-6 space-y-2">
            <li>• Large families or bulk laundry</li>
            <li>• Maximum value with per-pound pricing</li>
            <li>• Great for busy weeks</li>
          </ul>
          <a href="/schedule?bag=small" className="btn-alt block text-left">Choose Small Bag</a>
          </article>
      </div>

      <div className="text-left">
        <p className="sub mb-4">All per-pound orders include:</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl text-sm sub">
          <div>• Free pickup & delivery</div>
          <div>• Professional wash & fold</div>
          <div>• $35 minimum order</div>
        </div>
      </div>
    </div>
  </section>



        {/* BAG PRICING */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-left text-brand-text mb-6">Per bag pricing</h2>
            <p className="text-left sub mb-12">Fixed pricing regardless of weight within capacity limits—<strong className="text-brand-text">bags must close</strong> for fair pricing.</p>
            <div className="grid md:grid-cols-3 gap-8">
              
              <article className="card p-6 text-left">
              <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
            Most Popular
          </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Small Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$35</span>
                </p>
                <p className="sub mb-4">Fits 12–18 lbs</p>
                <p className="sub text-sm mb-6">Perfect for individuals or light loads. One fixed price regardless of actual weight within limits.</p>
                <a href="/schedule?bag=small" className="btn-alt block text-left">Choose Small Bag</a>
              </article>
              
              <article className="card p-6 text-left">
                <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Medium Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$55</span>
                </p>
                <p className="sub mb-4">Fits 20–30 lbs</p>
                <p className="sub text-sm mb-6">Great for families and regular laundry loads. Fixed pricing with generous capacity limits.</p>
                <a href="/schedule?bag=medium" className="btn-alt block text-left">Choose Medium Bag</a>
              </article>
              
              <article className="card p-6 text-left">
              <div className="inline-block bg-orange-100 text-brand-primaryDeep border border-orange-200 rounded-full px-3 py-1 text-xs font-bold mb-3">
            Most Popular
          </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Large Bag</h3>
                <p className="mb-2">
                  <span className="text-4xl font-black text-brand-text">$85</span>
                </p>
                <p className="sub mb-4">Fits 35–45 lbs</p>
                <p className="sub text-sm mb-6">Best for large households or bulk loads. Fixed price with our largest capacity allowance.</p>
                <a href="/schedule?bag=large" className="btn-alt block text-left">Choose Large Bag</a>
              </article>
            </div>
            <p className="text-xs sub text-left mt-8">Open-bag / overstuffed fee: $10 (we'll text first). Bag capacity estimates vary by fabric and size.</p>
          </div>
        </section>

        {/* SPECIALTY SERVICES */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-6">Specialty services</h2>
            <p className="text-center sub mb-12">Professional care for special items and fabrics</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <article className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">Dry Cleaning</h3>
                <p className="mb-2">
                  <span className="text-3xl font-black text-brand-text">From $8</span> 
                  <span className="text-sm font-semibold sub ml-1">per item</span>
                </p>
                <p className="sub mb-4">Expert care for suits, dresses, coats, delicates, and special fabrics requiring dry cleaning.</p>
                <p className="text-sm sub">24-48 hour turnaround • $35 minimum order</p>
              </article>

              <article className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">Bedding Bundle</h3>
                <p className="mb-2">
                  <span className="text-3xl font-black text-brand-text">From $20</span> 
                  <span className="text-sm font-semibold sub ml-1">per bundle</span>
                </p>
                <p className="sub mb-4">Complete bedding sets, comforters, and bulky items. Specialized care for your bedding.</p>
                <p className="text-sm sub">24 hour turnaround • $35 minimum order</p>
              </article>
            </div>
          </div>
        </section>

        {/* ADD-ONS & FEES */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Add-ons</h3>
                <ul className="sub space-y-2">
                  <li>• Eco-friendly detergent <strong className="text-brand-text">+$0.10/lb</strong></li>
                  <li>• Hang-dry delicates <strong className="text-brand-text">+$0.25/lb</strong></li>
                  <li>• Same-day rush <strong className="text-brand-text">+$10 or +$0.25/lb</strong></li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Minimums & fees</h3>
                <ul className="sub space-y-2">
                  <li>• Order minimum <strong className="text-brand-text">$35</strong></li>
                  <li>• Missed pickup window <strong className="text-brand-text">$7</strong></li>
                  <li>• Open-bag / overstuffed <strong className="text-brand-text">$10</strong></li>
                  <li>• Extended zone (if applicable) <strong className="text-brand-text">$3–5</strong></li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">What's included</h3>
                <ul className="sub space-y-2">
                  <li>• Free pickup & delivery</li>
                  <li>• Sorting by color/fabric</li>
                  <li>• Visible stain pretreat</li>
                  <li>• Neat fold or garment press</li>
                  <li>• Text updates & photo proof</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE CALCULATOR */}
        <section className="py-16 lg:py-20 bg-brand-bg">
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
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-brand-text mb-2">Current rate</label>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-lg font-bold text-brand-text">${currentRate}/lb</span>
                      <span className="text-sm sub ml-2">
                        {isMember ? 'Member pricing' : 'Standard pricing'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
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
        <section className="py-16 lg:py-20 bg-white">
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
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Pricing FAQ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">How does membership work?</h3>
                <p className="sub">Members get $1.99/lb pricing (vs $2.25/lb standard) with weekly or bi-weekly recurring pickups. Save $0.26 per pound on every order.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Why do you have a $35 minimum?</h3>
                <p className="sub">Each pickup has fixed costs (driver time, routing, supplies). The minimum keeps pricing fair for small loads while maintaining quality service.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Can I switch between per-pound and bag pricing?</h3>
                <p className="sub">Absolutely—choose whatever pricing works better for your load that day. No commitment required.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">How accurate is the estimator?</h3>
                <p className="sub">It's designed to help you budget. Your final total is based on actual weight and options chosen at checkout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-white">
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