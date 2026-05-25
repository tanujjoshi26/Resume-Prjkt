import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanuj Joshi | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer building scalable infrastructure and modern applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={GeistSans.className}
        style={{ backgroundColor: "#050505", color: "#ededed" }}
      >
        {children}
      </body>
    </html>
  );
}
