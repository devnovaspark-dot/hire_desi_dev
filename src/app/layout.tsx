import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiredesidev.com"),
  title: {
    default: "Hire Desi Dev | Connect with Vetted Indian Developers",
    template: "%s | Hire Desi Dev",
  },
  description:
    "Hire curated, vetted Indian AI developers and software engineers. Flexible hourly, monthly, or fixed-cost engagements without middleman friction.",
  keywords: [
    "Hire AI Developer",
    "Hire Indian Developer",
    "Vetted Indian Engineers",
    "LLM Engineers India",
    "Hire Desi Dev",
    "Full Stack Developers India",
  ],
  authors: [{ name: "Hire Desi Dev & Nova Spark Digital Marketing" }],
  openGraph: {
    title: "Hire Desi Dev | Professional Developer Talent Platform",
    description:
      "Vetted Indian AI specialists and software engineers. Hourly, monthly, or fixed-cost engagements.",
    url: "https://hiredesidev.com",
    siteName: "Hire Desi Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Desi Dev | Connect with Vetted Indian Developers",
    description:
      "Vetted Indian AI specialists and software engineers. Hourly, monthly, or fixed cost.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5EF] text-[#171717] font-sans selection:bg-[#E8FF63] selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
