import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@mastermind/theme";

export const metadata: Metadata = {
  title: `${brand.shortName} Admin`,
  description:
    "Mastermind Electricals & Electronics admin dashboard for products, inventory, orders and users."
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
