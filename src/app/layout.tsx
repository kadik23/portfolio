import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Create Next App",
    absolute: "%s | <S/>"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="lg:h-screen w-auto lg:overflow-hidden">
        <Header/> 
        <div >
          {children}
        </div>
      </body>
    </html>
  );
}
