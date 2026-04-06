import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mastermind Electricals & Electronics",
  description:
    "Mastermind Electricals & Electronics - quality electricals, electronics, accessories and trusted service."
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
