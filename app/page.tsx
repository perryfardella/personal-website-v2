import { RecentBlogPosts } from "./components/RecentBlogPosts";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <p>
          Hey, I'm a full stack software engineer currently travelling the world
          full time.
        </p>
        <RecentBlogPosts />
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
          {/* Add your projects content here */}
        </section>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Perry Fardella",
};
