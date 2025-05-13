import { ExternalLink } from "./ExternalLink";
import { Github, Globe } from "lucide-react";

type ProjectItemProps = {
  title: string;
  description?: string;
  githubUrl: string;
  liveUrl?: string;
};

const ProjectItem = ({
  title,
  description,
  githubUrl,
  liveUrl,
}: ProjectItemProps) => {
  return (
    <li className="flex items-center justify-between group hover:bg-secondary rounded-md transition-colors px-2 -mx-2 mb-2">
      <div className="py-2">
        <span className="font-medium">{title}</span>
        {description && (
          <span className="text-muted-foreground"> - {description}</span>
        )}
      </div>
      <div className="flex gap-3 items-center ml-3 pl-3 border-l border-border">
        <ExternalLink href={githubUrl} aria-label="GitHub repository">
          <Github size={16} />
        </ExternalLink>
        {liveUrl && (
          <ExternalLink href={liveUrl} aria-label="Live website">
            <Globe size={16} />
          </ExternalLink>
        )}
      </div>
    </li>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Personal website",
      githubUrl: "https://github.com/perryfardella/personal-website-v2",
      liveUrl: "https://perryfardella.com",
    },
    {
      title: "CGT Calculator",
      description:
        "A tool to calculate your net capital gains tax from all sources",
      githubUrl: "https://github.com/perryfardella/cgt-calculator",
      liveUrl: "https://cgt-calculator.com",
    },
    {
      title: "The Fucket List",
      description:
        "A list app for building a bucket list of stretch goals for life",
      githubUrl: "https://github.com/perryfardella/fucket-list",
      liveUrl: "https://fucket-list.vercel.app/",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul className="mt-2">
        {projects.map((project) => (
          <ProjectItem key={project.githubUrl} {...project} />
        ))}
      </ul>
    </section>
  );
};
