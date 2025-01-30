import { RecentBlogPosts } from "./components/RecentBlogPosts";
import { RecentProjects } from "./components/RecentProjects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <p>
          Hey, I'm a full stack software engineer currently travelling the world
          full-time.
        </p>
        <RecentBlogPosts />
        <RecentProjects />
      </main>
    </div>
  );
}

export const metadata = {
  title: "Perry Fardella",
};
