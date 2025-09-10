import { Link } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="border-b border-brand-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-brand-primary">
            Bags of Laundry
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/schedule" className="btn">Schedule Pickup</Link>
            <img 
              src="/avatar.png" 
              alt="User avatar" 
              className="w-10 h-10 rounded-full border border-brand-line" 
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Upcoming Order */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Upcoming Pickup</h2>
          <p className="sub mb-2">📍 123 Main St, Detroit, MI 48226</p>
          <p className="sub mb-4">🗓️ Tomorrow at 10:00 AM</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-brand-primary h-3 rounded-full w-1/3"></div>
          </div>
          <p className="text-xs mt-2 text-brand-text">Status: Scheduled → Picked Up → Cleaning → Delivery</p>
        </section>

        {/* Recent Orders */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Recent Orders</h2>
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

        {/* Preferences */}
        <section className="card p-6">
          <h2 className="text-xl font-bold text-brand-text mb-4">Preferences</h2>
          <ul className="space-y-2">
            <li>🧴 Detergent: Eco-friendly</li>
            <li>🧺 Folding: Standard fold</li>
            <li>📱 Updates: Text message</li>
          </ul>
          <Link to="/settings" className="btn-alt mt-4 inline-block">Update Preferences</Link>
        </section>

      </main>
    </div>
  );
}
