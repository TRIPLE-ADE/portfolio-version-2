import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulrasheed-abdulsalam.vercel.app"),
  title: {
    default: "Abdulrasheed Abdulsalam — Frontend & Mobile Engineer",
    template: "%s — Abdulrasheed Abdulsalam",
  },
  description:
    "Frontend and mobile engineer building reliable React, React Native, and on-device AI products from Lagos, Nigeria.",
  applicationName: "Abdulrasheed Abdulsalam Portfolio",
  authors: [{ name: "Abdulrasheed Abdulsalam" }],
  creator: "Abdulrasheed Abdulsalam",
  keywords: [
    "Frontend Engineer",
    "Mobile Engineer",
    "React Native Engineer",
    "React Engineer",
    "Next.js Developer",
    "Nigeria Software Engineer",
    "On-device AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abdulrasheed Abdulsalam — Frontend & Mobile Engineer",
    description: "Product-minded engineering across mobile, web, and on-device AI.",
    url: "/",
    siteName: "Abdulrasheed Abdulsalam",
    type: "website",
    images: [{ url: "/rasheed.PNG", width: 1200, height: 630, alt: "Abdulrasheed Abdulsalam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrasheed Abdulsalam — Frontend & Mobile Engineer",
    description: "Product-minded engineering across mobile, web, and on-device AI.",
    images: ["/rasheed.PNG"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1116" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={manrope.variable}>
        <a
          href="#main-content"
          className="sr-only fixed top-4 left-4 z-100 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
