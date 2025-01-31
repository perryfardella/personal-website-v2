import { BlogPosts } from "./components/BlogPosts";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <div className="space-y-4">
          <p>
            Hey, I&apos;m a Software Engineer and Tax Accountant. currently
            travelling the world full-time as I take a year sabbatical from my
            job.
          </p>
          <p>
            I&apos;m interested in all things finance, tech and indie hacking
            and will be working on open source software and building some
            projects of my own throughout the year.
          </p>
          <p>
            Away from the computer, I&apos;m a BJJ Blue Belt, absolute novice at
            Muay Thai and enjoy reading, seeing live music, trying new
            activities/foods and hanging out with my friends and family.
          </p>
          <p>
            I&apos;m currently probably in a coffee shop in Thailand, a 7-Eleven
            in Japan or a co-working space in Europe. Slide in my X dm&apos;s or
            email me if you need me.
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
