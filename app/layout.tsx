import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  metadataBase: new URL("https://rasheed-abdulsalam.vercel.app"),
  titleTemplate: "%s | Rasheed's Portfolio",
  title: "Rasheed's Portfolio",
  description: "Portfolio showcasing frontend development skills and projects",
  keywords: [
    "Abdulrasheed Abdulsalam",
    "Portfolio",
    "Frontend Developer",
    "Web Development",
    "Technical Writer",
    "Developer Relations",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Mobile Development",
    "Projects",
    "Tech Skills",
    "Developer Portfolio",
    "Software Engineer",
  ],
  author: "Abdulrasheed Abdulsalam",
  openGraph: {
    title: "Rasheed's Portfolio",
    description: "Discover Rasheed's work and projects in software development.",
    url: "https://rasheed-abdulsalam.vercel.app",
    type: "website",
    images: [
      {
        url: "/rasheed.PNG",
        alt: "Rasheed's Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasheed's Portfolio",
    description: "Discover Rasheed's work and projects in software development.",
    images: ["/rasheed.PNG"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrollProvider>
            <div className="relative min-h-screen">
              <Navbar />
              <ScrollProgress />
              <main id="main-content">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
