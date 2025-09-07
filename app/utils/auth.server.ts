// app/utils/auth.server.ts
import { redirect } from "@remix-run/node";
import { createSupabaseServerClient } from "./supabase.server";

export const requireAuth = async (request: Request) => {
  const { supabase, headers } = createSupabaseServerClient(request);

  // 1. Get the current session from cookies
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw redirect("/auth/login");
  }

  // 2. Double-check user still exists in Supabase
  const { data: userData, error } = await supabase.auth.getUser(
    session.access_token
  );

  if (error || !userData?.user) {
    console.warn("Invalid or deleted user tried to access:", error?.message);
    throw redirect("/auth/login", { headers });
  }

  // ✅ At this point, we know:
  // - Session is valid
  // - User exists in Supabase
  return { session, user: userData.user };
};
