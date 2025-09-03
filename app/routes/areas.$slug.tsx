import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const MAP: Record<string, { title: string; zips: string[]; blurb: string; }> = {
  "midtown-detroit": {
    title: "Laundry Pickup & Delivery in Midtown Detroit",
    zips: ["48201", "48202"],
    blurb: "Daily routes along the Woodward corridor, Wayne State area, and cultural center."
  },
  "corktown": {
    title: "Laundry Pickup & Delivery in Corktown",
    zips: ["48216"],
    blurb: "Fast pickups across Michigan Ave, Roosevelt Park, and the surrounding streets."
  },
  // add more slugs here...
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug || "";
  const data = MAP[slug];
  if (!data) throw new Response("Not found", { status: 404 });
  return json({ slug, ...data });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Area Not Found | Bags Of Laundry" }];
  return [
    { title: `${data.title} | Bags Of Laundry` },
    { name: "description", content: `${data.title}. Next-day turnaround. Check availability by ZIP.` }
  ];
};

export default function AreaPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <header>
        <span className="pill">Service Area</span>
        <h1 className="section-title mt-3">{data.title}</h1>
        <p className="sub">{data.blurb}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h3 className="font-bold">ZIP Codes covered</h3>
          <p className="sub mt-2">{data.zips.join(", ")}</p>
        </div>
        <div className="card p-5">
          <h3 className="font-bold">Popular schedules</h3>
          <p className="sub mt-2">Morning pickups (8–10AM) and afternoon windows (2–4PM) are most popular here.</p>
        </div>
      </section>

      <div className="card p-6 text-center">
        <h2 className="section-title">Ready for pickup?</h2>
        <p className="sub">We’ll confirm availability for your address.</p>
        <a className="btn mt-3" href="/start">Check Your ZIP</a>
      </div>
    </>
  );
}
