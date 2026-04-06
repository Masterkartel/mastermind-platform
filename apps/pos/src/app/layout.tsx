import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mastermind POS",
  description:
    "Mastermind Electricals & Electronics point of sale for walk-in sales, quotations and receipts."
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
