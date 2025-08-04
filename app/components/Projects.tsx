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
      title: "The AI Toolkit",
      description:
        "A collection of AI tools built using Vercel AI SDK - Contact me for access",
      githubUrl: "https://github.com/perryfardella/ai-toolkit",
      liveUrl: "https://ai-toolkit-xi.vercel.app/",
    },
    {
      title: "Personal website",
      description: "My personal website & blog, you're here right now!",
      githubUrl: "https://github.com/perryfardella/personal-website-v2",
      liveUrl: "https://perryfardella.com",
    },
    {
      title: "Healthy Meals AI",
      description:
        "A tool to generate healthy meal ideas based on your preferences",
      githubUrl: "https://github.com/perryfardella/healthy-meals-ai",
      liveUrl: "https://healthy-meals-ai.vercel.app/",
    },
    {
      title: "Smart Livestock Feeder",
      description:
        "A web app that connects to a cerboGX powered livestock feeder and allows you to feed your livestock remotely, monitor feed and water levels, and more.",
      githubUrl: "https://github.com/perryfardella/smart-livestock-feeder",
      liveUrl: "https://smart-livestock-feeder.vercel.app/",
    },
    {
      title: "CGT Calculator",
      description:
        "A tool to calculate your net capital gains tax from all sources",
      githubUrl: "https://github.com/perryfardella/cgt-calculator",
      liveUrl: "https://cgt-calculator.com",
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
