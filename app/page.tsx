import { ExternalLink } from "./components/ExternalLink";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <div className="space-y-4">
          <p>
            Hey, I&apos;m a Software Engineer and Tax Accountant. currently
            travelling the world full-time as I take a year sabbatical from my
            job to chill out a little bit and work on side projects.
          </p>
          <p>
            Away from the computer, I spend most of my free time training BJJ,
            reading or playing video games.
          </p>
        </div>

        <h2>Writing</h2>
        <p>
          I write about all things tech, finance and travel on my Substack{" "}
          <ExternalLink href="https://perryfardella.substack.com">
            here
          </ExternalLink>
        </p>
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
