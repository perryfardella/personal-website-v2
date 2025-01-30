import { BlogPosts } from "./components/BlogPosts";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <div className="space-y-4">
          <p>
            Hey, I'm a full stack software engineer and ex tax accountant
            currently travelling the world full-time as I take a year sabbatical
            from from my job.
          </p>
          <p>
            Professionally, I'm currently contributing to some open source
            software like Strapi and working on projects of my own.
          </p>
          <p>
            Recreationally I'm soaking in different cultures, hanging with
            friends, tasting every food I can get my hands on and keeping fit by
            hitting the gym and training BJJ and Muay Thai.
          </p>
        </div>

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
