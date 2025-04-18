import { Lato } from "next/font/google";
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
    description:
      "Discover Rasheed's work and projects in software development.",
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
    description:
      "Discover Rasheed's work and projects in software development.",
    images: ["/rasheed.PNG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative min-h-screen">
              <Navbar />
              <ScrollProgress />
              <main>{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
