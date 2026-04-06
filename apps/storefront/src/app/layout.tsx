import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@mastermind/theme";

export const metadata: Metadata = {
  title: brand.name,
  description:
    "Mastermind Electricals & Electronics - quality electrical materials, electronics, accessories and trusted service."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
