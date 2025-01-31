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
            CGT Calculator
          </ExternalLink>
        </li>
      </ul>
    </section>
  );
};
