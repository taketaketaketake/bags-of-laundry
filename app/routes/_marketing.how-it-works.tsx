import type { MetaFunction, HeadersFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=300, s-maxage=86400",
});

export const meta: MetaFunction = () => ([
  { title: "How It Works | Bags Of Laundry" },
  { name: "description", content: "Schedule a pickup, we clean and fold, and deliver next day. Preferences saved for a truly set-and-forget experience." }
]);

export default function HowItWorks() {
  return (
    <>
      <header>
        <span className="pill">Fast & reliable</span>
        <h1 className="section-title mt-3">How it works</h1>
        <p className="sub max-w-2xl">Three easy steps — plus optional rush and weekly plans.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card p-5">
          <h3 className="font-bold">1) Schedule</h3>
          <p className="sub mt-2">Choose a pickup window. Tell us your preferences once—we’ll remember next time.</p>
        </div>
        <div className="card p-5">
          <h3 className="font-bold">2) We clean & fold</h3>
          <p className="sub mt-2">Your items are sorted, washed, dried, and neatly folded or hung as requested.</p>
        </div>
        <div className="card p-5">
          <h3 className="font-bold">3) Delivery</h3>
          <p className="sub mt-2">We bring everything back—often within 24 hours—with text updates at each step.</p>
        </div>
      </section>

      <div className="card p-6 text-center">
        <h2 className="section-title">Ready to skip laundry day?</h2>
        <p className="sub">Book in minutes—Detroit routes daily.</p>
        <a className="btn mt-3" href="/start">Schedule Pickup</a>
      </div>
    </>
  );
}
