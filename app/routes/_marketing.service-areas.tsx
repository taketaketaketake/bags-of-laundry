import type { HeadersFunction, MetaFunction } from "@remix-run/node";

const CORE = ["48226", "48201", "48216", "48208", "48202", "48207"]; // Downtown, Midtown, Corktown, New Center, Eastern Market (example)
const BLURB = "We cluster routes across downtown, Midtown, Corktown, New Center, and Eastern Market for faster, greener pickups.";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=600, s-maxage=86400",
});

export const meta: MetaFunction = () => ([
  { title: "Service Areas | Bags Of Laundry" },
  { name: "description", content: "Detroit and nearby neighborhoods. Enter your ZIP at scheduling—core downtown corridors served daily." }
]);

export default function ServiceAreas() {
  return (
    <>
      <header>
        <span className="pill">Detroit & nearby</span>
        <h1 className="section-title mt-3">Service Areas</h1>
        <p className="sub max-w-2xl">{BLURB}</p>
        <div className="mt-4">
          <a className="btn" href="/start">Check Your ZIP</a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h3 className="font-bold">Core ZIP Codes</h3>
          <p className="sub mt-2">{CORE.join(", ")}</p>
        </div>
        <div className="card p-5">
          <h3 className="font-bold">Short-Term Rentals & Commercial</h3>
          <p className="sub mt-2">
            We support hosts and businesses across central Detroit and nearby suburbs. Ask about dedicated route days.
          </p>
          <a className="btn-alt mt-3" href="/contact">Talk to Sales</a>
        </div>
      </section>
    </>
  );
}
