import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import InstallPrompt from "@/components/InstallPrompt";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const OG_IMAGE = "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png";
const BASE_URL = "https://www.zach.my";
const SITE_TITLE = "Zach | Personal Website";
const SITE_DESC =
  "Personal website of Rizky Zaki Zulkarnaen (Zach) — software engineer, blogger, and developer from Indonesia. Explore projects, articles, and more.";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL(BASE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: [
    "Rizky Zaki",
    "Zach",
    "software engineer",
    "web developer",
    "Indonesia",
    "portfolio",
    "blog",
    "Next.js",
  ],
  authors: [{ name: "Rizky Zaki Zulkarnaen", url: BASE_URL }],
  creator: "Rizky Zaki Zulkarnaen",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: BASE_URL,
    siteName: "Zach",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Zach Personal Website" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rizky Zaki Zulkarnaen",
    alternateName: "Zach",
    url: BASE_URL,
    sameAs: [
      "https://github.com/RizkyZaki",
      "https://www.linkedin.com/in/rizkyzaki/",
    ],
    jobTitle: "Software Engineer",
    description: SITE_DESC,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={work_sans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <InstallPrompt />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
