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

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://www.zach.my"),
  title: "Zach | Personal Website",
  description:
    "Welcome to Zach portfolio website. Discover my projects, skills, and professional journey. View my resume and contact me for services.",
  openGraph: {
    title: "Zach | Portfolio",
    description:
      "Welcome to Zach portfolio website. Discover my projects, skills, and professional journey. View my resume and contact me for services.",
    images: [
      {
        url: "https://www.iaryan.tech/opengraph-image.png",
      },
    ],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={work_sans.className}>
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
