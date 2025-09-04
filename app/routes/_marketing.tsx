// app/routes/_marketing.tsx
import { Outlet } from "@remix-run/react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function MarketingLayout() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}