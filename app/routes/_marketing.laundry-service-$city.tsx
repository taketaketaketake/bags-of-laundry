// app/routes/_marketing.laundry-service-$city.tsx
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// City data configuration
const CITIES = {
  "royal-oak": {
    name: "Royal Oak",
    state: "MI",
    zipCodes: ["48067", "48073"],
    neighborhoods: [
      "Downtown Royal Oak",
      "Woodward Corners", 
      "Vinsetta Blvd",
      "Royal Oak Township",
      "Catalpa Drive corridor",
      "Normandy Oaks"
    ],
    testimonials: [
      { quote: "Pickup was right on time and everything came back neatly folded. Total time saver.", author: "Sarah J." },
      { quote: "We use them weekly for our Airbnb linens. Zero misses and great communication.", author: "Daniel K." },
      { quote: "Fair pricing, eco-friendly options, and fast turnaround. Five stars.", author: "Priya M." }
    ]
  },
  "dearborn": {
    name: "Dearborn",
    state: "MI", 
    zipCodes: ["48124", "48126", "48127"],
    neighborhoods: [
      "East Dearborn",
      "West Dearborn", 
      "Aviation Sub",
      "Dearborn Heights border",
      "Ford Rouge Plant area"
    ],
    testimonials: [
      { quote: "Been using them for months. Always professional and on time.", author: "Ahmed M." },
      { quote: "Great service for our restaurant's linens. Reliable pickup every week.", author: "Maria S." },
      { quote: "Love the eco-friendly options. Clean clothes, clean conscience.", author: "Jennifer L." }
    ]
  },
  "troy": {
    name: "Troy",
    state: "MI",
    zipCodes: ["48083", "48084", "48085", "48098"], 
    neighborhoods: [
      "Downtown Troy",
      "Troy Historic Village area",
      "Somerset Collection district", 
      "Big Beaver corridor",
      "Northfield Hills"
    ],
    testimonials: [
      { quote: "Perfect for busy professionals. Schedule online and forget about laundry.", author: "David R." },
      { quote: "They handle our office's uniform cleaning perfectly.", author: "Lisa T." },
      { quote: "Same-day service saved me when I had an important meeting.", author: "Michael K." }
    ]
  },
  "ferndale": {
    name: "Ferndale",
    state: "MI",
    zipCodes: ["48220"],
    neighborhoods: [
      "Downtown Ferndale",
      "Woodward Heights", 
      "9 Mile corridor",
      "Ferndale Historic District"
    ],
    testimonials: [
      { quote: "Love supporting a local business that actually cares about service.", author: "Emma W." },
      { quote: "Quick turnaround and fair pricing. What more could you want?", author: "Jake B." },
      { quote: "They saved my favorite dress with expert dry cleaning.", author: "Rachel P." }
    ]
  }
  // Add more cities as needed
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const citySlug = params.city;
  
  if (!citySlug || !CITIES[citySlug as keyof typeof CITIES]) {
    throw new Response("City not found", { status: 404 });
  }
  
  const cityData = CITIES[citySlug as keyof typeof CITIES];
  
  return json({ 
    cityData,
    citySlug,
    url: `https://bagsoflaundry.com/laundry-service-${citySlug}`
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "City Not Found | Bags of Laundry" }
    ];
  }

  const { cityData } = data;
  
  return [
    { title: `Laundry Pickup & Delivery in ${cityData.name}, ${cityData.state} | Bags of Laundry` },
    { 
      name: "description", 
      content: `Fast, reliable laundry pickup & delivery in ${cityData.name}, ${cityData.state}. Wash & fold, dry cleaning, and commercial laundry with same-day options. Schedule your pickup today.` 
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: `Laundry Pickup & Delivery in ${cityData.name}, ${cityData.state} | Bags of Laundry` },
    { property: "og:description", content: `Laundry day, done. Wash & fold, dry cleaning, and commercial laundry—picked up and delivered in ${cityData.name}.` },
    { property: "og:url", content: `https://bagsoflaundry.com/laundry-service-${data.citySlug}` },
    { property: "og:image", content: "https://bagsoflaundry.com/assets/og.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "canonical", content: `https://bagsoflaundry.com/laundry-service-${data.citySlug}` }
  ];
};

export default function CityService() {
  const { cityData, citySlug, url } = useLoaderData<typeof loader>();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}#business`,
            "name": "Bags of Laundry",
            "url": url,
            "image": "https://bagsoflaundry.com/assets/og.jpg",
            "telephone": "+1-313-555-0123",
            "description": `Laundry pickup & delivery, wash & fold, dry cleaning, and commercial laundry for homes and businesses in ${cityData.name}, ${cityData.state}.`,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "08:00",
              "closes": "20:00"
            }],
            "areaServed": [{
              "@type": "City",
              "name": cityData.name,
              "postalCode": cityData.zipCodes
            }],
            "serviceType": ["Laundry Pickup and Delivery","Wash & Fold","Dry Cleaning","Commercial Laundry"],
            "sameAs": [
              "https://www.facebook.com/bagsoflaundry",
              "https://www.instagram.com/bagsoflaundry"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type":"ListItem","position":1,"name":"Home","item":"https://bagsoflaundry.com/"},
              {"@type":"ListItem","position":2,"name":"Service Areas","item":"https://bagsoflaundry.com/service-areas"},
              {"@type":"ListItem","position":3,"name":`${cityData.name} Laundry Pickup & Delivery`,"item":url}
            ]
          })
        }}
      />

      {/* HERO SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-brand-accent border border-teal-200 rounded-full px-3 py-1 text-sm font-bold mb-6">
                {cityData.name} • {cityData.zipCodes.join(" · ")}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
                Laundry Pickup & Delivery in <span className="text-brand-primary">{cityData.name}, {cityData.state}</span>
              </h1>
              <p className="text-lg sub mb-8 leading-relaxed">
                Laundry day, done. We pick up, professionally clean (wash & fold or dry clean), and deliver back fresh—often within 24 hours.
                Perfect for busy families, professionals, and {cityData.name} businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/schedule" className="btn">Schedule Pickup</a>
                <a href="tel:+13135550123" className="btn-alt">Call: (313) 555-0123</a>
              </div>
            </div>

            <aside className="hero" aria-label="At-a-glance benefits">
              <h2 className="text-xl font-bold text-brand-text mb-6">Why {cityData.name} chooses us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Same-day & next-day options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Eco-friendly detergents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Reliable pickup windows</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-brand-text font-medium">Transparent, fair pricing</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cityData.zipCodes.map((zip) => (
                  <span key={zip} className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">
                    {zip}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main>
        {/* SERVICES */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Our laundry services in {cityData.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <article className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Wash & Fold</h3>
                <p className="sub">Everyday laundry—washed, dried, neatly folded, and delivered back to your door. Custom preferences welcome.</p>
              </article>
              
              <article className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Dry Cleaning</h3>
                <p className="sub">Professional care for suits, dresses, uniforms, and delicates—pickup & delivery included.</p>
              </article>
              
              <article className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Commercial Laundry</h3>
                <p className="sub">Flexible, reliable solutions for gyms, salons, restaurants, and short-term rentals in {cityData.name}.</p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">How pickup & delivery works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Schedule</h3>
                <p className="sub">Book a pickup window online—set your detergent, temperature, and folding prefs.</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-brand-text mb-3">We collect</h3>
                <p className="sub">Place your bag(s) at the door. We scan, weigh, and track everything.</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-brand-text mb-3">Fresh delivery</h3>
                <p className="sub">Clothes return clean, folded, and ready to put away—often in 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS & ZIP CODES */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Neighborhoods & ZIP codes we serve</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">{cityData.name} Areas</h3>
                <p className="sub">
                  {cityData.neighborhoods.join(", ")}.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">ZIP Coverage</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cityData.zipCodes.map((zip) => (
                    <span key={zip} className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-bold">
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">What {cityData.name} customers say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {cityData.testimonials.map((testimonial, index) => (
                <blockquote key={index} className="card p-6">
                  <p className="text-brand-text mb-4">"{testimonial.quote}"</p>
                  <p className="sub text-sm">— {testimonial.author}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">{cityData.name} FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-4">

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">Do you offer same-day service in {cityData.name}?</summary>
                <p className="sub mt-3">Yes—choose an early pickup window and select "same-day" at checkout when available.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">Can I set detergent and folding preferences?</summary>
                <p className="sub mt-3">Absolutely. Save your preferences in your account or specify them at scheduling—we'll follow them every time.</p>
              </details>

              <details className="card p-6">
                <summary className="cursor-pointer font-bold text-brand-text text-lg">Do you serve {cityData.name} businesses?</summary>
                <p className="sub mt-3">Yes. We handle towels, linens, uniforms, and more with flexible pickups and volume pricing.</p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
              <p className="sub mb-8">Book a pickup in {cityData.name} now—your future self will thank you.</p>
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