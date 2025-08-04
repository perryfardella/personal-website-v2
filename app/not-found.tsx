import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-lg">Well, this is awkward... 😅</p>
        <p>
          You&apos;ve stumbled into the digital equivalent of a dead end. The
          page you&apos;re looking for either doesn&apos;t exist, got lost in
          cyberspace, or is probably off somewhere having an existential crisis.
        </p>
        <p>
          Don&apos;t worry though - even I get lost sometimes, and I built this
          place!
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <p>Here are some places you might want to check out instead:</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            🏠 Take me home
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            📝 Read my blog
          </Link>
        </div>
      </div>

      <div className="pt-8 text-sm opacity-70">
        <p>
          If I&apos;m linking people to this page, I&apos;d appreciate it if you
          could email me and let me know.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "404 - Page Not Found",
};
