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
        {children}
      </body>
    </html>
  );
}
