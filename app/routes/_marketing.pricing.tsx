import type { MetaFunction, HeadersFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=300, s-maxage=86400",
});

export const meta: MetaFunction = () => ([
  { title: "Pricing | Detroit Laundry Pickup & Delivery | Bags Of Laundry" },
  { name: "description", content: "Simple, transparent pricing. $2.25/lb standard or $1.99/lb weekly. $35 minimum. See add-ons and commercial tiers." }
]);

export default function Pricing() {
  return (
    <>
      <header>
        <span className="pill">Transparent & simple</span>
        <h1 className="section-title mt-3">Pricing</h1>
        <p className="sub">Pick per-pound or use flat-rate bags. No surprises.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        <article className="card p-5">
          <div className="pill">Most Popular</div>
          <h3 className="font-bold mt-2">Standard (next-day)</h3>
          <p className="text-3xl font-black mt-1">$2.25 <span className="sub text-base">/ lb</span></p>
          <p className="sub mt-2">Reliable windows. Great for most households.</p>
          <a className="btn mt-4" href="/start">Schedule</a>
          <p className="sub text-xs mt-2">Order minimum $35</p>
        </article>

        <article className="card p-5">
          <div className="pill">Best Value</div>
          <h3 className="font-bold mt-2">Weekly / Bi-weekly</h3>
          <p className="text-3xl font-black mt-1">$1.99 <span className="sub text-base">/ lb</span></p>
          <p className="sub mt-2">Lock a route day. Save every week.</p>
          <a className="btn mt-4" href="/start?plan=weekly">Choose Plan</a>
          <p className="sub text-xs mt-2">Order minimum $35</p>
        </article>

        <article className="card p-5">
          <div className="pill">In a hurry</div>
          <h3 className="font-bold mt-2">Same-day rush</h3>
          <p className="text-3xl font-black mt-1">+$10</p>
          <p className="sub mt-2">Capacity limited. Morning pickups only.</p>
          <a className="btn-alt mt-4" href="/start?rush=true">Check Availability</a>
        </article>
      </section>

      <section id="commercial" className="grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h2 className="section-title">Commercial tiers</h2>
          <ul className="sub list-disc ml-5 mt-2">
            <li>50–100 lb: $2.05–$2.15/lb</li>
            <li>100–250 lb: $1.90–$2.05/lb</li>
            <li>250+ lb: custom</li>
          </ul>
          <a className="btn mt-4" href="/contact">Talk to Sales</a>
        </div>
        <div className="card p-5">
          <h2 className="section-title">Add-ons & fees</h2>
          <ul className="sub list-disc ml-5 mt-2">
            <li>Eco detergent +$0.10/lb</li>
            <li>Hang-dry +$0.25/lb</li>
            <li>Missed pickup $7</li>
          </ul>
        </div>
      </section>
    </>
  );
}
