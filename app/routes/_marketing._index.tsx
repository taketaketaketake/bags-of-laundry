import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=300, s-maxage=86400",
});

export const meta: MetaFunction = () => ([
  { title: "Laundry Pickup & Delivery in Detroit | Bags Of Laundry" },
  { name: "description", content: "Fresh, friendly, and fast. Pickup & delivery across Detroit with next-day turnaround. $2.25/lb standard or $1.99/lb weekly plan." },
  { property: "og:title", content: "Bags Of Laundry — Detroit" },
  { property: "og:description", content: "Detroit laundry pickup & delivery. Warm, transparent, and reliable." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1600&auto=format&fit=crop" }
]);

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="hero grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <span className="pill">Trusted by Airbnb hosts, gyms & salons</span>
          <h1 className="section-title">Skip laundry day.</h1>
          <p className="sub max-w-xl">
            Pickup & delivery across Detroit. Next-day standard, weekly savings, and text updates at every step.
          </p>
          <div className="flex gap-3">
            <a className="btn" href="/start">Schedule Pickup</a>
            <a className="btn-alt" href="/how-it-works">How it works</a>
          </div>
          <p className="sub text-sm">Serving Downtown, Midtown, Corktown, New Center, Eastern Market & nearby.</p>
        </div>

        <div className="card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0d7f6c8e6a8?q=80&w=1400&auto=format&fit=crop"
            alt="Freshly folded laundry"
            className="w-full h-72 object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="grid md:grid-cols-3 gap-5">
        <article className="card p-5">
          <h3 className="font-bold text-lg">Pickup & delivery</h3>
          <p className="sub mt-1">Reliable time windows & contactless options. We text when we’re on the way.</p>
          <a className="btn-ghost mt-3" href="/start">Check availability →</a>
        </article>

        <article className="card p-5">
          <h3 className="font-bold text-lg">Wash & fold your way</h3>
          <p className="sub mt-1">Detergent, temperature, folding style—your preferences are saved for next time.</p>
          <a className="btn-ghost mt-3" href="/services">See services →</a>
        </article>

        <article className="card p-5">
          <div className="pill mb-2">For Hosts & Businesses</div>
          <h3 className="font-bold text-lg">Short-term rentals & commercial</h3>
          <p className="sub mt-1">Weekly routes, labeled bags, delivery manifests. Volume pricing available.</p>
          <a className="btn-ghost mt-3" href="/pricing#commercial">Explore tiers →</a>
        </article>
      </section>

      {/* PRICING HIGHLIGHT */}
      <section className="grid md:grid-cols-3 gap-5">
        <div className="card p-6">
          <div className="pill">Most popular</div>
          <h3 className="font-bold text-lg mt-2">Standard (next-day)</h3>
          <p className="text-3xl font-extrabold mt-1">$2.25 <span className="sub text-base">/ lb</span></p>
          <p className="sub mt-2">Great for most households. $35 order minimum.</p>
          <a className="btn mt-4" href="/start">Schedule</a>
        </div>
        <div className="card p-6">
          <div className="pill">Best value</div>
          <h3 className="font-bold text-lg mt-2">Weekly / Bi-weekly</h3>
          <p className="text-3xl font-extrabold mt-1">$1.99 <span className="sub text-base">/ lb</span></p>
          <p className="sub mt-2">Lock a route day & save. Easy pause/skip.</p>
          <a className="btn mt-4" href="/start?plan=weekly">Choose plan</a>
        </div>
        <div className="card p-6">
          <div className="pill">In a hurry</div>
          <h3 className="font-bold text-lg mt-2">Same-day rush</h3>
          <p className="text-3xl font-extrabold mt-1">+ $10</p>
          <p className="sub mt-2">Limited capacity. Morning pickups only.</p>
          <a className="btn-alt mt-4" href="/start?rush=true">Check availability</a>
        </div>
      </section>

      {/* SERVICE AREA / CTA */}
      <section className="card p-6 md:p-8 text-center">
        <h2 className="section-title">We’re in your neighborhood</h2>
        <p className="sub mt-2">Downtown • Midtown • Corktown • New Center • Eastern Market</p>
        <a className="btn mt-4" href="/start">Check your ZIP</a>
      </section>

      {/* FAQ PREVIEW */}
      <section className="grid md:grid-cols-2 gap-5">
        <div className="card p-6">
          <h3 className="font-bold text-lg">How fast is delivery?</h3>
          <p className="sub mt-2">Next-day is standard. Same-day rush is available most mornings.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-bold text-lg">Do you serve Airbnb hosts?</h3>
          <p className="sub mt-2">Yes—unit-labeled bags, manifests, and photo proof on request.</p>
        </div>
      </section>
    </div>
  );
}
