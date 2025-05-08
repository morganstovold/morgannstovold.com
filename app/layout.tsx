import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morgan Stovold | Full Stack Software Engineer & UI/UX Designer",
  description:
    "Full Stack Software Engineer specializing in building scalable web applications and intuitive user interfaces. Expert in TypeScript, React, Node.js, Next.js, and AWS.",
  keywords: [
    "Morgan Stovold",
    "Full Stack Developer",
    "Software Engineer",
    "UI/UX Designer",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "AWS",
    "Web Development",
    "Frontend Development",
    "Backend Development",
  ],
  authors: [{ name: "Morgan Stovold" }],
  creator: "Morgan Stovold",
  publisher: "Morgan Stovold",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://morgannstovold.com",
    title: "Morgan Stovold | Full Stack Software Engineer & UI/UX Designer",
    description:
      "Full Stack Software Engineer specializing in building scalable web applications and intuitive user interfaces. Expert in TypeScript, React, Node.js, Next.js, and AWS.",
    siteName: "Morgan Stovold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morgan Stovold | Full Stack Software Engineer & UI/UX Designer",
    description:
      "Full Stack Software Engineer specializing in building scalable web applications and intuitive user interfaces.",
    creator: "@morgannstovold",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // You'll need to replace this with your actual Google verification code
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
