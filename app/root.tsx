// app/root.tsx
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

// If you're using Tailwind v4 via @tailwindcss/vite:
import styles from "./tailwind.css?url";
// If you're using a plain CSS file instead, swap to: import styles from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap",
  },
];

export const meta: MetaFunction = () => ([
  { title: "Bags Of Laundry — Detroit Pickup & Delivery" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { charSet: "utf-8" },
]);

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  let title = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : (error.statusText || details);
  } else if (error instanceof Error) {
    details = error.message;
  }

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-text">

        <main className="container mx-auto p-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-slate-400">{details}</p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
