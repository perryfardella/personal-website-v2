import Link from "next/link";

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-blue-500 hover:text-blue-700">
      {children}
    </Link>
  );
};
