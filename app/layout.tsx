import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Process-first AI for SA service firms | Patrick — Adelaide",
  description:
    "I go into your business, learn the work by doing it, map how jobs actually move — then automate the friction with AI. Custom to your workflows. Adelaide.",
  openGraph: {
    title: "Process-first AI | Patrick — Adelaide",
    description:
      "Custom to your workflows. Not a cookie-cutter bot pack. Adelaide, phone-first service firms.",
    locale: "en_AU",
    type: "website",
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
