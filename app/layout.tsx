import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "A simple course catalog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex gap-6 p-4 border-b">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/courses" className="hover:underline">
            Courses
          </Link>

          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}