"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Perry Fardella" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex w-full mb-6 justify-between">
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={`hover:opacity-60 transition-opacity ${
              isActive(link.href) ? "border-b-2" : ""
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
