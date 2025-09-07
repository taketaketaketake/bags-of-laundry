// app/components/SiteHeader.tsx
import { useState } from "react";
import { useLocation, Form, useOutletContext } from "@remix-run/react";

interface OutletContext {
  supabase: any;
  session: any;
}

export default function SiteHeader() {
  const location = useLocation();
  const { session } = useOutletContext<OutletContext>();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 font-bold text-xl text-brand-text hover:no-underline"
          >
            <svg
              className="w-8 h-8 text-brand-primary"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="9" cy="9" r="1" fill="currentColor" />
              <circle cx="15" cy="9" r="1" fill="currentColor" />
            </svg>
            <span>Bags of Laundry</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  location.pathname === link.href
                    ? "text-brand-primary font-semibold"
                    : "text-brand-text hover:text-brand-primary transition"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side desktop actions */}
          <div className="hidden lg:flex items-center gap-3">

            {session ? (
              <>
                <a
                  href="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "text-brand-primary font-semibold"
                      : "text-brand-text hover:text-brand-primary transition"
                  }
                >
                  Dashboard
                </a>
                <div className="flex items-center gap-2 text-sm text-brand-text">
                  <span>
                    Hi,{" "}
                    {session.user?.user_metadata?.first_name ||
                      session.user?.email?.split("@")[0]}
                    !
                  </span>
                </div>
                <Form action="/auth/logout" method="post">
                  <button type="submit" className="btn-ghost text-sm">
                    Sign Out
                  </button>
                </Form>
              </>
            ) : (
              <>
                <a href="/auth/login" className="btn-ghost">
                  Sign In
                </a>
                <a href="/schedule" className="btn">
                  Schedule
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-brand-text hover:text-brand-primary focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-line bg-brand-bg/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  location.pathname === link.href
                    ? "text-brand-primary font-semibold"
                    : "text-brand-text hover:text-brand-primary transition"
                }
              >
                {link.label}
              </a>
            ))}

            {session ? (
              <>
                <a
                  href="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "text-brand-primary font-semibold"
                      : "text-brand-text hover:text-brand-primary transition"
                  }
                >
                  Dashboard
                </a>
                <div className="text-sm text-brand-text">
                  Hi,{" "}
                  {session.user?.user_metadata?.first_name ||
                    session.user?.email?.split("@")[0]}
                  !
                </div>
                <Form action="/auth/logout" method="post">
                  <button type="submit" className="btn-ghost text-sm w-full text-left">
                    Sign Out
                  </button>
                </Form>
              </>
            ) : (
              <>
                <a href="/auth/login" className="btn-ghost">
                  Sign In
                </a>
                <a href="/schedule" className="btn w-full text-center">
                  Schedule
                </a>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
