export const loader = async () => {
    const txt = `User-agent: *
  Allow: /
  Sitemap: /sitemap.xml
  `;
    return new Response(txt, { headers: { "Content-Type": "text/plain" } });
  };
  