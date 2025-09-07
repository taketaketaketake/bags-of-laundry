// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// Set SESSION_SECRET in your env (Netlify/Local)
const sessionSecret = process.env.SESSION_SECRET || "dev-secret-change-me";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__bol_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
});

export function getSession(cookieHeader: string | null) {
  return sessionStorage.getSession(cookieHeader);
}
export function commitSession(session: Awaited<ReturnType<typeof getSession>>) {
  return sessionStorage.commitSession(session);
}
export function destroySession(session: Awaited<ReturnType<typeof getSession>>) {
  return sessionStorage.destroySession(session);
}
