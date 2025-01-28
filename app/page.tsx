export default function Home() {
  return (
    <div>
      <header>
        <nav>
          {/* // Internal links */}
          <ul className="flex gap-4">
            <li>
              <a href="/">Perry Fardella</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
          {/* External links */}
          <ul className="flex gap-4">
            <li>
              <a href="/login">Github</a>
            </li>
            <li>
              <a href="/login">LinkedIn</a>
            </li>
            <li>
              <a href="/login">X</a>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
