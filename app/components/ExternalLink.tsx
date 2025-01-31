export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-blue-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
