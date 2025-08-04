// import type { Metadata } from "next"; What was this being used for, do I need it?
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Perry Fardella",
    default: "Perry Fardella", // This is used when no title is specified
  },
  description: "The personal website of Perry Fardella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col p-8 max-w-xl w-full justify-self-center`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <NavBar />
          </header>
          <main className="w-full space-y-6 flex-1">
            {children}
            <Analytics />
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
