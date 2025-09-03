import { Outlet } from "@remix-run/react";

export default function MarketingLayout() {
  return (
    <main className="container mx-auto px-4 py-10 space-y-12">
      <Outlet />
    </main>
  );
}
