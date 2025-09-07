// app/root.tsx
import type { LinksFunction, MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import { createSupabaseServerClient } from "~/utils/supabase.server";
import { createSupabaseBrowserClient } from "~/utils/supabase.client";

// Change this line - remove the ?url for Tailwind v3
import "./tailwind.css";

export const links: LinksFunction = () => [
  // Remove the stylesheet link since we're importing directly
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };

  const { supabase, headers } = createSupabaseServerClient(request);
  
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return json({ env, session }, { headers });
};

export default function App() {
  const { env, session } = useLoaderData<typeof loader>();
  const { revalidate } = useRevalidator();
  const [supabase] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    return createSupabaseBrowserClient();
  });

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    if (!supabase) return;
    
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        revalidate();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, serverAccessToken, revalidate]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ supabase, session }} />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />
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