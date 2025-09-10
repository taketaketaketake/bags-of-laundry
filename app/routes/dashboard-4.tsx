import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Dashboard() {
  const [tab, setTab] = useState("orders");

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* HEADER */}
      <header className="border-b border-brand-line bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold text-brand-primary">👕 Bags of Laundry</h1>
          <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">Z</div>
        </div>
      </header>

      {/* TABS */}
      <nav className="flex border-b border-brand-line bg-white">
        {["orders", "preferences", "billing"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-medium ${
              tab === t ? "text-brand-primary border-b-2 border-brand-primary" : "text-gray-500"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* ORDERS */}
        {tab === "orders" && (
          <>
            {/* UPCOMING */}
            <section className="card p-4">
              <h2 className="text-lg font-bold mb-2">Upcoming Pickup</h2>
              <p className="sub mb-1">📍 123 Main St</p>
              <p className="sub mb-3">🗓️ Tomorrow 10:00 AM</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-primary h-2 rounded-full w-1/4"></div>
              </div>
              <p className="text-xs mt-2 text-gray-600">Status: Scheduled → Picked Up → Cleaning → Delivery</p>
            </section>

            {/* HISTORY */}
            <section className="card p-4">
              <h2 className="text-lg font-bold mb-2">Past Orders</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Aug 28 • 24 lbs • $36.50</span>
                  <button className="btn-alt text-xs">Reorder</button>
                </li>
                <li className="flex justify-between">
                  <span>Aug 15 • 18 lbs • $28.00</span>
                  <button className="btn-alt text-xs">Reorder</button>
                </li>
                <li className="flex justify-between">
                  <span>Aug 1 • 12 lbs • $20.00</span>
                  <button className="btn-alt text-xs">Reorder</button>
                </li>
              </ul>
            </section>
          </>
        )}

        {/* PREFERENCES */}
        {tab === "preferences" && (
          <section className="card p-4">
            <h2 className="text-lg font-bold mb-2">Preferences</h2>
            <ul className="space-y-1 text-sm">
              <li>🧴 Detergent: Eco-friendly</li>
              <li>🧺 Folding: Standard fold</li>
              <li>📱 Updates: Text</li>
            </ul>
            <Link to="/settings" className="btn-alt mt-3 inline-block text-sm">Edit Preferences</Link>
          </section>
        )}

        {/* BILLING */}
        {tab === "billing" && (
          <section className="card p-4">
            <h2 className="text-lg font-bold mb-2">Billing</h2>
            <p className="text-sm">💳 Visa ending in 1234</p>
            <p className="text-sm mb-3">Credits: $5.00</p>
            <Link to="/billing" className="btn-alt text-sm">View Invoices</Link>
          </section>
        )}
      </main>

      {/* FLOATING ACTION */}
      <Link 
        to="/schedule" 
        className="fixed bottom-6 right-6 bg-brand-primary text-white rounded-full px-6 py-3 shadow-lg font-bold"
      >
        + Pickup
      </Link>
    </div>
  );
}
