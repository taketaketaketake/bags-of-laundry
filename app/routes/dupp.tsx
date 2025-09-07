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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-60"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-100 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700">Bags Of Laundry • Detroit</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-8 leading-none">
              <span className="block">Simple,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                transparent pricing
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Laundry day should be <em className="font-semibold text-gray-900 not-italic">effortless</em>. We price the way we operate—no surprises, no gotchas. Choose <strong className="text-blue-600">per-pound</strong> or a <strong className="text-orange-500">flat-rate bag</strong>, add rush or preferences if you want, and we'll take it from there.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/schedule" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                <span className="mr-2">🚀</span>
                Start an Order
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              <a href="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200">
                <span className="mr-2">📋</span>
                See Services
              </a>
            </div>

            
            {isMember && (
              <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-6 py-3 text-sm font-semibold text-green-800 shadow-sm">
                <span className="mr-2">🎉</span>
                Save $0.26 per pound with membership!
              </div>
            )}
          </div>
        </div>
      </section>


      <main>    
  {/* CORE PRICING */}
  <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
    <div className="absolute inset-0 opacity-50">
      <div className="w-full h-full bg-gray-100 bg-opacity-30"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
          <span className="inline-flex items-center">
            <span className="text-4xl mr-3">⚖️</span>
            Per-pound pricing
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pay for exactly what you need. Perfect for regular loads and flexible scheduling.
        </p>
      </div>

      {/* Member Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-xl border border-gray-200/50 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setIsMember(false)}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
              !isMember
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">💰</span>
            Standard Pricing
          </button>
          <button
            type="button"
            onClick={() => setIsMember(true)}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
              isMember
                ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">⭐</span>
            Member Pricing
          </button>
        </div>
      </div>

      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              ${currentRate}
            </div>
            <div className="text-gray-600 font-medium mt-2">per pound</div>
            {!isMember && (
              <div className="mt-3 inline-flex items-center bg-green-100 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-800">
                <span className="mr-1">💡</span>
                Save $0.26/lb with membership!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* 10 lbs */}
        <article className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎒</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">10 pounds</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                ${(10 * currentRate).toFixed(2)}
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-medium">Perfect for weekly maintenance loads</p>
            <ul className="text-sm text-gray-600 mb-8 space-y-3">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Individual or light weekly loads
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                24-hour turnaround
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Professional wash, dry, and fold
              </li>
            </ul>
            <a href="/schedule?weight=10" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-200">
              📦 Choose 10lbs
            </a>
          </div>
        </article>

        {/* 20 lbs - Featured */}
        <article className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200 transform hover:-translate-y-2 transition-all duration-300 scale-105">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg">
              <span className="mr-2">⭐</span>
              Most Popular
            </div>
          </div>
          <div className="text-center pt-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">20 pounds</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
                ${(20 * currentRate).toFixed(2)}
              </span>
            </div>
            <p className="text-gray-700 mb-6 font-medium">Perfect for families and couples</p>
            <ul className="text-sm text-gray-700 mb-8 space-y-3">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Most requested service size
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Regular laundry needs
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Best value for most households
              </li>
            </ul>
            <a href="/schedule?weight=20" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all duration-200">
              🎆 Choose 20lbs
            </a>
          </div>
        </article>

        {/* 30 lbs */}
        <article className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📦📦</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30 pounds</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
                ${(30 * currentRate).toFixed(2)}
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-medium">Best value for large households</p>
            <ul className="text-sm text-gray-600 mb-8 space-y-3">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Large families or bulk laundry
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Maximum value with per-pound pricing
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Great for busy weeks
              </li>
            </ul>
            <a href="/schedule?weight=30" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 hover:border-green-300 transition-all duration-200">
              🌿 Choose 30lbs
            </a>
          </div>
        </article>
      </div>

      <div className="text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <span className="mr-3">✨</span>
            All per-pound orders include
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center text-gray-600">
              <span className="text-2xl mr-3">🚚</span>
              <span className="font-medium">Free pickup & delivery</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <span className="text-2xl mr-3">📋</span>
              <span className="font-medium">Professional wash & fold</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <span className="text-2xl mr-3">💰</span>
              <span className="font-medium">$35 minimum order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



        {/* BAG PRICING */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                <span className="inline-flex items-center">
                  <span className="text-4xl mr-3">👜</span>
                  Per bag pricing
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fixed pricing regardless of weight within capacity limits. <strong className="text-orange-600">Bags must close</strong> for fair pricing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Small Bag */}
              <article className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Bag</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">$35</span>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <p className="text-blue-800 font-semibold">Fits 12–18 lbs</p>
                  </div>
                  <p className="text-gray-600 mb-8">Perfect for individuals or light loads. One fixed price regardless of actual weight within limits.</p>
                  <a href="/schedule?bag=small" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-200">
                    🎒 Choose Small Bag
                  </a>
                </div>
              </article>
              
              {/* Medium Bag - Featured */}
              <article className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200 transform hover:-translate-y-2 transition-all duration-300 scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg">
                    <span className="mr-2">⭐</span>
                    Best Value
                  </div>
                </div>
                <div className="text-center pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👜</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Medium Bag</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">$55</span>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-4 mb-6">
                    <p className="text-orange-800 font-semibold">Fits 20–30 lbs</p>
                  </div>
                  <p className="text-gray-700 mb-8">Great for families and regular laundry loads. Fixed pricing with generous capacity limits.</p>
                  <a href="/schedule?bag=medium" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all duration-200">
                    👜 Choose Medium Bag
                  </a>
                </div>
              </article>
              
              {/* Large Bag */}
              <article className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Bag</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">$85</span>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 mb-6">
                    <p className="text-green-800 font-semibold">Fits 35–45 lbs</p>
                  </div>
                  <p className="text-gray-600 mb-8">Best for large households or bulk loads. Fixed price with our largest capacity allowance.</p>
                  <a href="/schedule?bag=large" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 hover:border-green-300 transition-all duration-200">
                    🛍️ Choose Large Bag
                  </a>
                </div>
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
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full opacity-10 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-white bg-opacity-5"></div>
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                <span className="inline-flex items-center">
                  <span className="text-4xl mr-3">🧮</span>
                  Quick estimate
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Enter your best guess in pounds — an average family load is ~8–12 lb. This isn't a quote; exact totals show at checkout.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20">
              <div className="grid lg:grid-cols-3 gap-10">
                
                <div className="space-y-4">
                  <label htmlFor="lbs" className="block text-lg font-bold text-gray-900 mb-4">
                    <span className="inline-flex items-center">
                      <span className="text-2xl mr-2">⚖️</span>
                      Estimated pounds
                    </span>
                  </label>
                  <div className="relative">
                    <input 
                      id="lbs" 
                      type="number" 
                      min="1" 
                      defaultValue="20"
                      className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center text-gray-400 font-semibold">
                      lbs
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800 font-medium flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      Tip: 1 kitchen trash bag ≈ 12–18 lb
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-2xl mr-2">💰</span>
                      Current rate
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        ${currentRate}/lb
                      </div>
                      <div className="text-sm text-gray-600 mt-2 font-medium">
                        {isMember ? '⭐ Member pricing' : '💵 Standard pricing'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-xl mr-2">✨</span>
                      Add-ons
                    </h4>
                    <label className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <input id="rush" type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">🚀 Rush service</span>
                        <div className="text-sm text-gray-600">+$10 fixed fee</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <input id="eco" type="checkbox" className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">🌿 Eco detergent</span>
                        <div className="text-sm text-gray-600">+$0.10 per lb</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <input id="hang" type="checkbox" className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">👕 Hang-dry delicates</span>
                        <div className="text-sm text-gray-600">+$0.25 per lb</div>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 border-2 border-orange-300 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center bg-orange-500 text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg">
                      <span className="mr-2">🏆</span>
                      Estimated total
                    </div>
                    <p id="est" className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">$—</p>
                    <p className="text-sm text-orange-800 mb-6 bg-orange-200/50 rounded-lg p-3">
                      Includes $35 minimum if applicable. Taxes not included.
                    </p>
                    <a href="/schedule" className="group inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                      <span className="mr-3">🚀</span>
                      Schedule Pickup
                      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</div>
                    </a>
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
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute inset-0 opacity-50">
              <div className="w-full h-full bg-white bg-opacity-3"></div>
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 lg:p-16 text-center border border-white/20 shadow-2xl">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-8 animate-bounce">
                  <span className="text-3xl">🎆</span>
                </div>
                <h2 className="text-3xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to skip <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">laundry day</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Book a pickup in minutes. We'll handle the rest while you focus on what matters most.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="/schedule" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative mr-3">🚀</span>
                  <span className="relative">Schedule Pickup</span>
                </a>
                
                <a href="/services" className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                  <span className="mr-3">📋</span>
                  Explore Services
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</div>
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="text-white/80">
                  <div className="text-3xl mb-2">🚚</div>
                  <div className="font-semibold">Free pickup & delivery</div>
                </div>
                <div className="text-white/80">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="font-semibold">24-hour turnaround</div>
                </div>
                <div className="text-white/80">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold">Professional quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}