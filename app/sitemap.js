export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_HOME_URL || "https://adityaraul.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
