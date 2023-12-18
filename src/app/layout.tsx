import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BELANJA PAKAIAN BERKUALITAS & MURAH | Toko Pakaian Anugerah",
  description: "Pusatnya Pakaian Murah & Berkualitas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-w-[300px] max-w-7xl m-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
