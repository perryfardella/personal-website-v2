import ProjectCard from "./components/ProjectCard";
import { RecentBlogPosts } from "./components/RecentBlogPosts";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <p>
          Hey, I'm a full stack software engineer currently travelling the world
          full-time.
        </p>
        <RecentBlogPosts />
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
          <div className="flex gap-4 flex-wrap mb-4">
            <ProjectCard
              title="Project 1"
              description="This is a description of project 1"
              stack={["NextJS", "Tailwind CSS", "Vite"]}
              siteUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Project 2"
              description="This is a description of project 2"
              stack={["React", "Tailwind CSS", "Shadcn"]}
              siteUrl="https://example.com"
              githubUrl="https://github.com"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Perry Fardella",
};
