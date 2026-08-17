import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanuj Joshi",
  description:
    "Cloud & DevOps Engineer. I write about infrastructure, homelabs, automation, and whatever else I'm tinkering with.",
  openGraph: {
    title: "Tanuj Joshi",
    description:
      "Cloud & DevOps Engineer. Infrastructure, homelabs, and automation.",
    type: "website",
  },
};

// Replace UMAMI_WEBSITE_ID below with the ID from your Umami dashboard after first login
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "0d60e32a-3c25-4308-937c-89e2c1e29003";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${GeistSans.className} antialiased`} suppressHydrationWarning>
        {UMAMI_WEBSITE_ID && (
          <script
            defer
            src="http://raspberrypi.tail3bbc0.ts.net:3001/script.js"
            data-website-id={UMAMI_WEBSITE_ID}
          />
        )}
        {children}
      </body>
    </html>
  );
}
