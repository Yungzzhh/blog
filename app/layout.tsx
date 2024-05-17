import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Michael's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col h-screen">
          {/* header */}
          <Header />
          {/* content */}
          <div className=" mt-14   flex-1">{children}</div>
          {/* footer */}
          <div className=" w-full flex justify-center items-center h-16 bg-slate-50">
            footer
          </div>
        </div>
      </body>
    </html>
  );
}
