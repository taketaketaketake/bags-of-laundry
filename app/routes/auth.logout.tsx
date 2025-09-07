// app/routes/auth.logout.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createSupabaseServerClient } from "~/utils/supabase.server";
import { getSession, destroySession } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { supabase, headers } = createSupabaseServerClient(request);

  // 1. Supabase sign-out (clears sb:token cookies)
  await supabase.auth.signOut();

  // 2. Destroy Remix session cookie
  const cookieHeader = request.headers.get("Cookie");
  const session = await getSession(cookieHeader);

  headers.append("Set-Cookie", await destroySession(session));

  // 3. Redirect home with clean state
  return redirect("/", { headers });
};
