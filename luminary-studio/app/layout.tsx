import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luminary Studio | Digital Design Agency",
  description:
    "Luminary Studio crafts bold digital experiences — UI/UX design, web development, branding, and digital marketing that moves people and grows businesses.",
  keywords: ["digital agency", "UI/UX design", "web development", "branding", "digital marketing"],
  authors: [{ name: "Luminary Studio" }],
  openGraph: {
    title: "Luminary Studio | Digital Design Agency",
    description:
      "We craft bold digital experiences that move people and grow businesses.",
    url: "https://luminarystudio.co",
    siteName: "Luminary Studio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luminary Studio — Digital Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminary Studio | Digital Design Agency",
    description: "We craft bold digital experiences that move people and grow businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#0a0f1e] text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
