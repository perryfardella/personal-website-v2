import { promises as fs } from "fs";
import path from "path";

// Function to get blog posts (similar to the one in blog/page.tsx)
async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog");
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map(async (directory) => {
        try {
          const module = await import(`../blog/${directory.name}/page.mdx`);
          return {
            slug: directory.name,
            metadata: module.metadata,
          };
        } catch (e) {
          console.error(`Error loading ${directory.name}:`, e);
          return null;
        }
      })
  );

  return posts
    .filter(Boolean)
    .sort(
      (a: any, b: any) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 5); // Only return the 5 most recent posts
}

export async function RecentBlogPosts() {
  const posts = await getBlogPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post: any) => (
          <article key={post.slug}>
            <h3 className="text-lg">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.metadata.title}
              </a>
            </h3>
            <div className="text-sm">
              {new Date(post.metadata.publishedAt).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
