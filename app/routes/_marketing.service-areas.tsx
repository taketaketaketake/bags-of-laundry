// app/routes/_marketing.service-areas.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Service Areas | Laundry Pickup & Delivery Around Detroit | Bags of Laundry" },
  { 
    name: "description", 
    content: "We pick up & deliver laundry across Detroit and Metro suburbs within ~30 miles: Royal Oak, Dearborn, Ferndale, Grosse Pointe, Warren, Southfield, Troy, Livonia, Canton, Hamtramck, and more." 
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Service Areas | Bags of Laundry" },
  { property: "og:description", content: "Laundry pickup & delivery across Detroit and nearby suburbs. See all neighborhoods and ZIP codes we cover." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1583016060830-35b0c530c707?q=80&w=1600&auto=format&fit=crop" },
  { name: "canonical", content: "https://bagsoflaundry.com/service-areas" }
];

export default function ServiceAreas() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"LocalBusiness",
            "@id":"https://bagsoflaundry.com/service-areas#business",
            "name":"Bags of Laundry",
            "url":"https://bagsoflaundry.com/service-areas",
            "image":"https://bagsoflaundry.com/assets/og.jpg",
            "telephone":"+1-313-555-0123",
            "description":"Laundry pickup & delivery for homes and businesses across Detroit and Metro Detroit suburbs.",
            "areaServed":[
              {"@type":"City","name":"Detroit"},
              {"@type":"City","name":"Royal Oak"},
              {"@type":"City","name":"Dearborn"},
              {"@type":"City","name":"Ferndale"},
              {"@type":"City","name":"Grosse Pointe"},
              {"@type":"City","name":"Warren"},
              {"@type":"City","name":"Southfield"},
              {"@type":"City","name":"Troy"},
              {"@type":"City","name":"Livonia"},
              {"@type":"City","name":"Canton"},
              {"@type":"City","name":"Hamtramck"}
            ],
            "openingHours":"Mo-Su 08:00-20:00",
            "priceRange":"$$"
          })
        }}
      />

      {/* HERO SECTION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero">
            <div className="pill mb-6">Detroit • ~30 mile radius</div>
            <h1 className="text-3xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Where we pick up & deliver
            </h1>
            <p className="text-lg sub mb-8 leading-relaxed max-w-4xl">
              We serve Detroit's core neighborhoods and Metro Detroit suburbs—so you can skip laundry day. Below you'll find
              every city and neighborhood we cover, plus ZIP codes for quick reference. Don't see your area? <a href="/contact" className="text-brand-primary hover:underline">Contact us</a>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/schedule" className="btn">Schedule Pickup</a>
              <a href="/pricing" className="btn-alt">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INDEX BAR */}
      <div className="sticky top-16 z-40 bg-brand-bg/90 backdrop-blur-sm border-b border-brand-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="pill text-xs">Jump to:</span>
            <a href="#detroit" className="text-sm text-brand-text hover:text-brand-primary transition px-3 py-1 rounded-full border border-brand-line hover:bg-orange-50">Detroit Neighborhoods</a>
            <a href="#wayne" className="text-sm text-brand-text hover:text-brand-primary transition px-3 py-1 rounded-full border border-brand-line hover:bg-orange-50">Wayne County</a>
            <a href="#oakland" className="text-sm text-brand-text hover:text-brand-primary transition px-3 py-1 rounded-full border border-brand-line hover:bg-orange-50">Oakland County</a>
            <a href="#macomb" className="text-sm text-brand-text hover:text-brand-primary transition px-3 py-1 rounded-full border border-brand-line hover:bg-orange-50">Macomb County</a>
            <a href="#faq" className="text-sm text-brand-text hover:text-brand-primary transition px-3 py-1 rounded-full border border-brand-line hover:bg-orange-50">FAQ</a>
          </div>
        </div>
      </div>

      <main>
        {/* DETROIT NEIGHBORHOODS */}
        <section id="detroit" className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-brand-text mb-6">Detroit Neighborhoods</h2>
            <p className="sub mb-12">Core neighborhoods and districts inside Detroit city limits.</p>
            <div className="grid md:grid-cols-3 gap-6">

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Downtown Detroit</h3>
                <p className="text-sm sub mb-3">Central Business District, Capitol Park, Greektown, Campus Martius</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48226</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Midtown</h3>
                <p className="text-sm sub mb-3">Cass Corridor, Cultural Center, Wayne State area</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48201</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">New Center / North End</h3>
                <p className="text-sm sub mb-3">Henry Ford Hospital area, Milwaukee Junction</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48202</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48211</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Corktown / Mexicantown</h3>
                <p className="text-sm sub mb-3">Roosevelt Park, Michigan Ave corridor, Southwest</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48216</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48209</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Eastern Market</h3>
                <p className="text-sm sub mb-3">Market District & adjacent lofts</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48207</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">West Village / Islandview</h3>
                <p className="text-sm sub mb-3">Parker's Alley, Kercheval corridor</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48214</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Boston-Edison / Virginia Park</h3>
                <p className="text-sm sub mb-3">Historic homes, Linwood corridor</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48206</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Rosedale Park / Grandmont</h3>
                <p className="text-sm sub mb-3">Grand River & Southfield area</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48223</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">University District / Palmer Woods</h3>
                <p className="text-sm sub mb-3">Livernois Avenue of Fashion</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48221</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Conant Gardens</h3>
                <p className="text-sm sub mb-3">Near City Airport</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48234</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Jefferson-Chalmers</h3>
                <p className="text-sm sub mb-3">Canals District</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48215</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Northwest / Brightmoor</h3>
                <p className="text-sm sub mb-3">Outer Drive & Telegraph</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48235</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAYNE COUNTY SUBURBS */}
        <section id="wayne" className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-brand-text mb-6">Wayne County Suburbs</h2>
            <p className="sub mb-12">Cities within ~30 miles of Downtown Detroit.</p>
            <div className="grid md:grid-cols-3 gap-6">

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Dearborn</h3>
                <p className="text-sm sub mb-3">East/West Dearborn, Aviation Sub</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48124</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48126</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48127</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Dearborn Heights</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48125</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48127</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Livonia</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48150</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48152</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48154</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Canton</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48187</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48188</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Westland</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48185</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48186</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Taylor</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48180</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Hamtramck</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48212</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Highland Park</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48203</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Downriver Cities</h3>
                <p className="text-sm sub mb-3">Allen Park, Lincoln Park, Southgate, Riverview, Wyandotte, Trenton</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48101</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48146</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48195</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48192</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OAKLAND COUNTY SUBURBS */}
        <section id="oakland" className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-brand-text mb-6">Oakland County Suburbs</h2>
            <p className="sub mb-12">North & northwest of Detroit.</p>
            <div className="grid md:grid-cols-3 gap-6">

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Royal Oak</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48067</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48073</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Ferndale</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48220</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Southfield</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48033</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48034</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48075</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Troy</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48083</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48084</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48085</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Birmingham</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48009</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Farmington Hills</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48334</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48335</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MACOMB COUNTY SUBURBS */}
        <section id="macomb" className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-brand-text mb-6">Macomb County Suburbs</h2>
            <p className="sub mb-12">Northeast of Detroit along the lake & inland.</p>
            <div className="grid md:grid-cols-3 gap-6">

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Warren</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48088</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48089</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48091</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Sterling Heights</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48310</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48312</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">St. Clair Shores</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48080</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48081</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Clinton Township</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48035</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48036</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Grosse Pointe</h3>
                <p className="text-sm sub mb-3">Park, City, Farms, Woods, Shores</p>
                <div className="flex flex-wrap gap-1">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48230</span>
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48236</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">Roseville</h3>
                <div className="flex flex-wrap gap-1 mt-8">
                  <span className="inline-block bg-green-100 text-green-700 border border-green-200 rounded-full px-2 py-1 text-xs font-bold">48066</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="section-title text-brand-text mb-4">Not sure if we cover your address?</h2>
              <p className="sub mb-8">We likely do. Enter your ZIP during scheduling and we'll confirm coverage instantly.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/schedule" className="btn">Schedule Pickup</a>
                <a href="/contact" className="btn-alt">Ask a Question</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-brand-text mb-12">Service Areas FAQ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">How far from Downtown Detroit do you go?</h3>
                <p className="sub">Roughly a 20–30 mile radius, covering most of Wayne, southern Oakland, and southern Macomb counties.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Do you charge extra for farther suburbs?</h3>
                <p className="sub">Pricing is transparent; some areas may have different minimums or limited same-day pickup. You'll see details at booking.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">Can businesses outside this list get service?</h3>
                <p className="sub">Yes—reach out. We offer custom routes for commercial clients with recurring volume.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-text mb-3">What if my neighborhood isn't listed?</h3>
                <p className="sub">We're expanding! Try your ZIP in the scheduler or <a href="/contact" className="text-brand-primary hover:underline">contact us</a> to confirm coverage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}