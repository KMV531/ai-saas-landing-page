import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webdone - AI-Powered Website & Page Builder for Fast Launches",
  description:
    "Webdone lets you create stunning websites and landing pages in minutes using AI. Launch your product faster with smart design, responsive layouts, and zero code.",
  keywords: [
    "AI website builder",
    "landing page generator",
    "Webdone",
    "create site with AI",
    "no-code website",
    "SaaS landing page",
    "launch product fast",
    "AI startup tools",
    "website automation",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  openGraph: {
    title: "Webdone - Create Sites & Pages Instantly with AI",
    description:
      "Use Webdone to build beautiful, responsive websites and pages powered by AI. From MVPs to full launches — no code required.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Webdone",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/assets/logo.png`, // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Webdone AI Website & Landing Page Builder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdone - Launch Your Product Fast with AI",
    description:
      "Create stunning websites and pages effortlessly using Webdone's AI-powered builder. Save time. Launch faster.",
    images: [`${process.env.NEXT_PUBLIC_URL}/assets/logo.png`],
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Explicit link fallback (optional, Next will auto inject from metadata too) */}
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
