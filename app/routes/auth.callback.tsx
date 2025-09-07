// app/routes/auth.callback.tsx
import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { createSupabaseServerClient } from "~/utils/supabase.server";
import { getSession, commitSession } from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase, headers } = createSupabaseServerClient(request);
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return redirect("/", { headers });
  }

  try {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Exchange error:", error.message);
      return redirect(`/auth/login?error=${encodeURIComponent(error.message)}`, { headers });
    }

    // Get the intended redirect URL from session
    const session = await getSession(request.headers.get("Cookie"));
    const redirectTo = session.get("redirectTo") || "/dashboard";
    
    // Clear the redirectTo from session since we're using it
    session.unset("redirectTo");
    headers.append("Set-Cookie", await commitSession(session));

    return redirect(redirectTo, { headers });
    
  } catch (err) {
    console.error("Unexpected error in callback:", err);
    return redirect("/auth/login?error=An unexpected error occurred during confirmation", { headers });
  }
};

export default function Callback() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4"></div>
        <p className="text-brand-text">Finishing sign-in, please wait…</p>
      </div>
    </div>
  );
}