export const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul className="mt-2">
        <li>
          <a
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/perryfardella/personal-website-v2"
          >
            Personal website
          </a>
        </li>
        <li>
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/perryfardella/cgt-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            CGT Calculator
          </a>
        </li>
        {/* <li>
          <a className="text-blue-500 hover:text-blue-700">
            Ranked Leaderboard
          </a>
        </li> */}
      </ul>
    </section>
  );
};
