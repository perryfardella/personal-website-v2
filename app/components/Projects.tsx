import { ExternalLink } from "./ExternalLink";

export const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul className="mt-2">
        <li>
          <ExternalLink href="https://github.com/perryfardella/personal-website-v2">
            Personal website
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/perryfardella/cgt-calculator">
            CGT Calculator - A tool to calculate your net capital gains tax from
            all sources.
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/perryfardella/fucket-list">
            The Fucket List - A list app for building a bucket list of stretch
            goals for life.
          </ExternalLink>
        </li>
      </ul>
    </section>
  );
};
