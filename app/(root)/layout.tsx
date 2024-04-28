import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/lib/providers/ToastProvider";
import Footer from "@/components/Footer";
import FreeOffer from "@/components/FreeOffer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borcella Store",
  description: "Borcella Ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ClerkProvider>
          <ToastProvider />
          <FreeOffer />
          <Navbar />
          <div className="min-h-[calc(100vh-300px)]">{children}</div>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
