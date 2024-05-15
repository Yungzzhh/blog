import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
          inter.variable
        )}
      >
        <div className=" flex  justify-end items-center p-4 fixed w-full top-0 z-10 bg-slate-50">
          <div className=" absolute left-0">
            <Link href={"/"}>
              <Image
                src="/signature.svg"
                alt=""
                width={200}
                height={50}
                id="l1"
              ></Image>
            </Link>
          </div>
          <div className="flex gap-8 mr-8">
            <Link href={"/articles"}>Articles</Link>
            <Link href={"/trick"}>Trick</Link>
            <Link href={"/photo-wall"}>PhotoWall</Link>
            <Link href={"/links"}>Links</Link>
          </div>
        </div>
        <div className=" mt-16">{children}</div>
        <div>footer</div>
      </body>
    </html>
  );
}
