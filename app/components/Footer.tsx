import { Book, Github, Link, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
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
    {
      href: "mailto:me@perryfardella.com",
      label: "Email",
      icon: Mail,
    },
  ];

  return (
    <nav className="flex justify-center mt-6">
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
        <li key="blog" className="list-none mb-0">
          <Link
            href="/blog"
            className="hover:opacity-60 transition-opacity"
            aria-label="Blog"
          >
            <Book size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
