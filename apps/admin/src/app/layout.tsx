import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mastermind Admin",
  description:
    "Mastermind Electricals & Electronics admin dashboard for inventory, orders, users and reports."
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
