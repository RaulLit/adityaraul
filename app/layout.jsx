import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_HOME_URL || "https://adityaraul.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aditya Raul | Full Stack Developer & SSO Architect",
    template: "%s | Aditya Raul",
  },
  description:
    "Portfolio of Aditya Raul - Full Stack Developer, SSO Architect & Photographer based in Navi Mumbai, India. Creator of LastBenchScholar.",
  keywords: [
    "Aditya Raul",
    "Full Stack Developer",
    "SSO Architect",
    "Web Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Navi Mumbai Developer",
    "LastBenchScholar",
    "React Developer",
    "Photographer",
  ],
  authors: [{ name: "Aditya Raul", url: siteUrl }],
  creator: "Aditya Raul",
  publisher: "Aditya Raul",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Aditya Raul | Full Stack Developer & SSO Architect",
    description:
      "Portfolio of Aditya Raul - Full Stack Developer, SSO Architect & Photographer based in Navi Mumbai, India. Creator of LastBenchScholar.",
    url: siteUrl,
    siteName: "Aditya Raul",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile_photo_blue-bg.png",
        width: 800,
        height: 800,
        alt: "Aditya Raul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Raul | Full Stack Developer & SSO Architect",
    description:
      "Portfolio of Aditya Raul - Full Stack Developer, SSO Architect & Photographer based in Navi Mumbai, India.",
    creator: "@adityakraul",
    images: ["/profile_photo_blue-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

import { AnimeThemeProvider } from "./providers/AnimeThemeProvider";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Aditya Raul",
        url: siteUrl,
        image: `${siteUrl}/profile_photo_blue-bg.png`,
        jobTitle: "Full Stack Developer & SSO Architect",
        worksFor: {
          "@type": "Organization",
          name: "LastBenchScholar",
          url: "https://lastbenchscholar.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Navi Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/RaulLit",
          "https://www.linkedin.com/in/adityakraul/",
          "https://x.com/adityakraul",
          "https://www.instagram.com/notadityaraul/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aditya Raul Portfolio",
        description: "Official portfolio of Aditya Raul - Full Stack Developer & SSO Architect",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        <AnimeThemeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AnimeThemeProvider>
        <Toaster closeButton duration={10000} />
      </body>
    </html>
  );
}
