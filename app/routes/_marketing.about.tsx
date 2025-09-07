import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=300, s-maxage=86400",
});

export const meta: MetaFunction = () => [
  { title: "About Us | Bags Of Laundry — Detroit Pickup & Delivery" },
  { name: "description", content: "We're a Detroit-born team making laundry day effortless. Learn our story, values, and why hosts, families, and businesses trust Bags Of Laundry." },
  { property: "og:title", content: "About Bags Of Laundry" },
  { property: "og:description", content: "Detroit-born. Customer-obsessed. Reliable pickup & delivery, friendly service, and transparent pricing." },
];

export default function About() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bags Of Laundry",
    url: "https://bagsoflaundry.com",
    logo: "https://bagsoflaundry.com/logo.png",
    sameAs: [
      "https://www.instagram.com/bagsoflaundry",
      "https://www.facebook.com/bagsoflaundry",
      "https://www.linkedin.com/company/bagsoflaundry"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Detroit",
      addressRegion: "MI",
      addressCountry: "US"
    },
    areaServed: "Detroit metro area",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+1-313-555-0123",
      email: "hello@bagsoflaundry.com"
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pill mb-6">Detroit • Pickup & Delivery</div>
              <h1 className="section-title text-brand-text mb-6">About Bags Of Laundry</h1>
              <p className="text-lg sub mb-8 leading-relaxed">
                We started in Detroit with a simple promise: make laundry day
                effortless, friendly, and reliable. Today we serve families, Airbnb
                hosts, and local businesses with on-time pickups, careful cleaning,
                and clear communication—every single order.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="btn" href="/schedule">Schedule Pickup</a>
                <a className="btn-alt" href="/how-it-works">How it works</a>
              </div>
            </div>
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521043723867-92d1d4c79f55?q=80&w=1400&auto=format&fit=crop"
                alt="Team prepping clean, folded laundry for delivery"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="card p-8">
              <h2 className="section-title text-brand-text mb-6">Our story</h2>
              <p className="sub mb-6 leading-relaxed">
                Before Bags Of Laundry, our founders were juggling work, kids, and
                never-ending hampers. We felt how much time laundry steals—and how
                unpredictable many services can be. So we built the service
                we wanted: punctual routes, clear pricing, and real people who care.
              </p>
              <p className="sub leading-relaxed">
                From a handful of neighborhoods, we've grown across central Detroit
                and nearby suburbs—serving homes, short-term rentals, gyms, salons,
                clinics, and caterers. We keep the experience simple and the quality
                high so you can get back to what matters.
              </p>
            </div>
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
                alt="Driver loading neatly labeled laundry bags"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-12">What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">On-time, every time</h3>
              <p className="sub">
                Tight windows and reliable routes. We text when we're on the way,
                when we pick up, and when your order is out for delivery.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Care, not shortcuts</h3>
              <p className="sub">
                Preferences saved—detergent, temperature, folding style, hang-dry.
                We handle your items like they're our own.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-lg font-bold text-brand-text mb-3">Transparent pricing</h3>
              <p className="sub">
                Simple per-pound rates and clear minimums. Weekly plans for
                predictable savings; custom pricing for volume accounts.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <h2 className="section-title text-brand-text mb-6">Who we serve</h2>
            <p className="text-lg sub mb-6 leading-relaxed">
              Households, <strong className="text-brand-text">short-term rentals</strong>, and local{" "}
              <strong className="text-brand-text">businesses</strong> across Detroit. Popular clients include
              Airbnb hosts, gyms, studios, salons, spas, restaurants, caterers,
              clinics, and offices.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="pill">Airbnb Hosts</span>
              <span className="pill">Gyms & Studios</span>
              <span className="pill">Salons & Spas</span>
              <span className="pill">Restaurants & Caterers</span>
              <span className="pill">Clinics & Offices</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & STATS */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-8 text-center">
              <div className="text-4xl font-extrabold text-brand-primary mb-2">24h</div>
              <div className="sub">Typical turnaround</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-extrabold text-brand-primary mb-2">4.9★</div>
              <div className="sub">Avg. customer rating</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-extrabold text-brand-primary mb-2">99%</div>
              <div className="sub">On-time pickups</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-extrabold text-brand-primary mb-2">1000+</div>
              <div className="sub">Orders served</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-brand-text mb-6">Meet the team</h2>
          <p className="text-center sub mb-12">Friendly people, local routes, and real support.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Alex", 
                role: "Operations", 
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3" 
              },
              { 
                name: "Jordan", 
                role: "Driver Lead", 
                img: "https://images.unsplash.com/photo-1494790108755-2616b332e234?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3" 
              },
              { 
                name: "Taylor", 
                role: "Customer Care", 
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3" 
              },
            ].map((person) => (
              <article key={person.name} className="card overflow-hidden">
                <img 
                  src={person.img} 
                  alt={`${person.name} — ${person.role}`} 
                  className="w-full h-64 object-cover" 
                  loading="lazy" 
                />
                <div className="p-6">
                  <div className="font-bold text-brand-text text-lg">{person.name}</div>
                  <div className="sub">{person.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="section-title text-brand-text mb-4">Ready to skip laundry day?</h2>
            <p className="sub mb-8">Book in minutes—Detroit routes daily.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a className="btn" href="/schedule">Schedule Pickup</a>
              <a className="btn-alt" href="/pricing">See Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </>
  );
}