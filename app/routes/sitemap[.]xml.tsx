import type { LoaderFunctionArgs } from "@remix-run/node";
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const base = new URL(request.url).origin;
  const pages = ["","/services","/pricing","/service-areas","/how-it-works"];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(u => `<url><loc>${base}${u}</loc></url>`).join("")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
