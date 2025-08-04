import { BlogPosts } from "./components/BlogPosts";
import { ExternalLink } from "./components/ExternalLink";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <div className="space-y-4">
          <p>
            Hey, I&apos;m a Software Engineer and Tax Accountant. I&apos;m
            currently travelling the world full-time as I work on side projects
            and get my ass kicked in BJJ.
          </p>
        </div>

        <BlogPosts />
        <Projects />
        <div>
          <h2>Interviews</h2>
          <ul>
            <li>
              <ExternalLink href="https://www.youtube.com/watch?v=u3n-TuMHPLE">
                Around the blockchain podcast
              </ExternalLink>
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
