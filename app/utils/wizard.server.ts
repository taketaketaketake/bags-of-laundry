// app/utils/wizard.server.ts
import { redirect } from "@remix-run/node";
import { getSession, commitSession } from "../utils/session.server";

export type Wizard = {
  address?: { line1: string; city?: string; state?: string; postal: string };
  date?: string; // YYYY-MM-DD
  phone?: string;
  orderType?: "wash_fold" | "dry_cleaning" | "combo";
  addons?: { eco?: boolean; hangDry?: boolean; rush?: boolean; notes?: string };
  customer?: { fullName: string; email: string };
  estimate?: { lbs?: number; unitRateCents?: number; rushFeeCents?: number; subtotalCents?: number };
};

export async function readWizard(request: Request): Promise<Wizard> {
  const session = await getSession(request.headers.get("Cookie"));
  return (session.get("wizard") as Wizard) ?? {};
}

export async function writeWizard(request: Request, patch: Partial<Wizard>, redirectTo: string) {
  const session = await getSession(request.headers.get("Cookie"));
  const current = (session.get("wizard") as Wizard) ?? {};
  const merged = { ...current, ...patch };
  session.set("wizard", merged);
  return redirect(redirectTo, { headers: { "Set-Cookie": await commitSession(session) } });
}

export async function clearWizard(request: Request, redirectTo: string) {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("wizard");
  return redirect(redirectTo, { headers: { "Set-Cookie": await commitSession(session) } });
}
