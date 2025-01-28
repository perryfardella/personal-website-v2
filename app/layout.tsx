import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { NavBar } from "./components/NavBar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col p-8 pt-12 max-w-xl w-full justify-self-center`}
      >
        <header>
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>
        <footer>
          <SocialLinks />
        </footer>
      </body>
    </html>
  );
}

function SocialLinks() {
  const socialLinks = [
    { href: "https://github.com/perryfardella", label: "Github" },
    { href: "https://www.linkedin.com/in/perry-fardella/", label: "LinkedIn" },
    { href: "https://x.com/perryfardella", label: "X" },
  ];

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-2">
        {socialLinks.map((link) => (
          <li key={link.href + link.label}>
            <SocialIcon
              url={link.href}
              target="_blank"
              rel="noopener noreferrer"
              bgColor="transparent"
              fgColor="#9ca3af"
              className="hover:opacity-80 transition-opacity"
              style={{ height: 36, width: 36 }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
