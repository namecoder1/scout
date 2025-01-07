import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/blocks/navbar";
import Footer from "@/components/blocks/footer";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Progressione Orizzontale | Branca Esploratori ed Esploratrici",
  description: "La Progressione Personale in Reparto è divisa in due differenti percorsi, denominati, Progressione Orizzontale (PO) e Progressione Verticale (PV).",
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
        <div className="my-5 flex items-end justify-end mr-5 ">
          <p className="bg-gray-50 py-0.5 pl-2 group hover:bg-gray-100 rounded-lg border-[1px]">
            Realizzato da {" "}
            <Link className="bg-gray-100 hover:bg-gray-200 duration-300 border-[1px] font-semibold rounded-lg p-2" target="_blank" href='https://tob.codes'>@tobi </Link>
          </p>
        </div>
        <Footer />
      </body>
    </html>
  );
}
