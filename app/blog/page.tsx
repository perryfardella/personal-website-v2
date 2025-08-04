import { promises as fs } from "fs";
import path from "path";
import { InternalLink } from "../components/InternalLink";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary?: string;
  };
};

// Function to get blog posts
async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog");
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map(async (directory) => {
        try {
          const postModule = await import(`./${directory.name}/page.mdx`);
          return {
            slug: directory.name,
            metadata: postModule.metadata,
          };
        } catch (e) {
          console.error(`Error loading ${directory.name}:`, e);
          return null;
        }
      })
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}

// Group posts by year
function groupPostsByYear(posts: BlogPost[]) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, BlogPost[]>);
}

// Format date for display
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const postsByYear = groupPostsByYear(posts);
  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Sort years in descending order

  return (
    <div>
      <main className="space-y-8">
        <h1 className="text-4xl font-bold">Blog</h1>

        {years.map((year) => (
          <div key={year} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              {year}
            </h2>

            <ul className="space-y-4">
              {postsByYear[year].map((post) => (
                <li key={post.slug}>
                  <div className="flex gap-4 items-baseline">
                    <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                    <div>
                      <InternalLink href={`/blog/${post.slug}`}>
                        {post.metadata.title}
                      </InternalLink>
                      {post.metadata.summary && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {post.metadata.summary}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            No blog posts found.
          </p>
        )}
      </main>
    </div>
  );
}

export const metadata = {
  title: "Blog",
  description: "All blog posts by Perry Fardella",
};
