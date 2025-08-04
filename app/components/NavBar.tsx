"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <nav className="flex w-full mb-6 justify-between">
      <Link href="/" className="hover:opacity-60 transition-opacity">
        <h1>Perry Fardella</h1>
      </Link>

      <div className="flex gap-8 items-center">
        <Link href="/blog">Blog</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
