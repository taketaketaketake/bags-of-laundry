import { Link } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* HEADER */}
      <header className="border-b border-brand-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-brand-primary">👕 Bags of Laundry</h1>
          <div className="flex items-center gap-4">
            <Link to="/schedule" className="btn">Schedule Pickup</Link>
            <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">Z</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* UPCOMING ORDER */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Upcoming Pickup</h2>
          <p className="sub mb-2">📍 123 Main St, Detroit, MI 48226</p>
          <p className="sub mb-4">🗓️ Tomorrow at 10:00 AM</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-brand-primary h-3 rounded-full w-1/4"></div>
          </div>
          <p className="text-xs mt-2 text-brand-text">Status: Scheduled → Picked Up → Cleaning → Delivery</p>
        </section>

        {/* ORDER HISTORY */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Past Orders</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Aug 28 • 24 lbs • $36.50</span>
              <button className="btn-alt text-sm">Reorder</button>
            </li>
            <li className="flex justify-between">
              <span>Aug 15 • 18 lbs • $28.00</span>
              <button className="btn-alt text-sm">Reorder</button>
            </li>
            <li className="flex justify-between">
              <span>Aug 1 • 12 lbs • $20.00</span>
              <button className="btn-alt text-sm">Reorder</button>
            </li>
          </ul>
        </section>

        {/* PREFERENCES */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Your Preferences</h2>
          <ul className="space-y-2">
            <li>🧴 Detergent: Eco-friendly</li>
            <li>🧺 Folding: Standard fold</li>
            <li>📱 Updates: Text message</li>
          </ul>
          <Link to="/settings" className="btn-alt mt-4 inline-block">Update Preferences</Link>
        </section>

        {/* BILLING */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Billing</h2>
          <p className="sub mb-2">💳 Visa ending in 1234</p>
          <p className="sub mb-4">Credits: $5.00</p>
          <Link to="/billing" className="btn-alt">View Invoices</Link>
        </section>

      </main>
    </div>
  );
}
