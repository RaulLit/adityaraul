export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_HOME_URL || "https://adityaraul.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
