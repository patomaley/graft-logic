import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SITE_NAME } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1e6d3" },
    { media: "(prefers-color-scheme: dark)", color: "#14100c" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kintsugiai.vercel.app"),
  title: {
    default: `${SITE_NAME} · See how AI can transform your business`,
    template: `%s · ${SITE_NAME}`,
  },
  description: "See how AI can transform your business.",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: SITE_NAME,
    description: "See how AI can transform your business.",
    locale: "en_AU",
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kintsugi AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "See how AI can transform your business.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
