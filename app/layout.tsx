import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/blocks/navbar";
import Footer from "@/components/blocks/footer";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={montserrat.className}>
        <Navbar />
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
