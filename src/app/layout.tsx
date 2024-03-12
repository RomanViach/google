import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "@/components/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign in - Google Accounts",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <Aside/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
