"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const navLinks = [{ href: "/", label: "Perry Fardella" }];
  return (
    <nav className="flex w-full mb-6 justify-between">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="hover:opacity-60 transition-opacity"
        >
          <h1>{link.label}</h1>
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
