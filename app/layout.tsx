// import type { Metadata } from "next"; What was this being used for, do I need it?
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Github, Linkedin, Twitter } from "lucide-react";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

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
          <main className="flex-1">{children}</main>
          <footer>
            <SocialLinks />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

function SocialLinks() {
  const socialLinks = [
    {
      href: "https://github.com/perryfardella",
      label: "Github",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/perry-fardella/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://x.com/perryfardella",
      label: "X",
      icon: Twitter,
    },
  ];

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-4 pl-0">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href + link.label} className="list-none mb-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label={link.label}
              >
                <Icon size={24} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
