import { BlogPosts } from "./components/BlogPosts";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <p>
          Hey, I'm a full stack software engineer currently travelling the world
          full-time.
        </p>
        <BlogPosts />
        <Projects />
        <div>
          <h2>Interviews</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=u3n-TuMHPLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Around the blockchain podcast
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Perry Fardella",
};
