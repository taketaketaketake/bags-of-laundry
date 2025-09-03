import type { MetaFunction, HeadersFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=300, s-maxage=86400",
});

export const meta: MetaFunction = () => ([
  { title: "Laundry Services in Detroit | Bags Of Laundry" },
  { name: "description", content: "Pickup & delivery wash-and-fold, preferences saved, optional rush, and commercial services for hosts & businesses." }
]);

export default function Services() {
  return (
    <>
      <header>
        <span className="pill">Detroit • Pickup & Delivery</span>
        <h1 className="section-title mt-3">Services</h1>
        <p className="sub max-w-2xl">
          From wash & fold to commercial routes, we make laundry effortless. Book a one-time pickup or set a weekly plan.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        <article className="card p-5">
          <h3 className="font-bold">Wash & Fold (Pickup & Delivery)</h3>
          <ul className="sub list-disc ml-5 mt-2">
            <li>Next-day standard (typical)</li>
            <li>Text updates at each step</li>
            <li>Preferences saved for future orders</li>
          </ul>
          <a className="btn mt-4" href="/start">Schedule Pickup</a>
        </article>

        <article className="card p-5">
          <h3 className="font-bold">Rush Options</h3>
          <ul className="sub list-disc ml-5 mt-2">
            <li>Same-day capacity (limited)</li>
            <li>Morning pickup → evening delivery</li>
          </ul>
          <a className="btn-alt mt-4" href="/pricing">See Pricing</a>
        </article>

        <article className="card p-5">
          <div className="pill mb-2">For Hosts & Businesses</div>
          <h3 className="font-bold">Commercial & STR Laundry</h3>
          <ul className="sub list-disc ml-5 mt-2">
            <li>Weekly or multi-week routes</li>
            <li>Labeled bags & delivery manifests</li>
            <li>Photo proof on request</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a className="btn" href="/contact">Talk to Sales</a>
            <a className="btn-alt" href="/pricing#commercial">Host Pricing</a>
          </div>
        </article>
      </section>
    </>
  );
}
