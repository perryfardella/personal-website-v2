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
    .slice(0, 4); // Only return the 4 most recent posts
}

export async function BlogPosts() {
  const posts = await getBlogPosts();

  return (
    <section>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            {/* <div className="text-sm text-gray-600">
              {new Date(post.metadata.publishedAt).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </div> */}
            {/* <p> */}
            <a
              href={`/blog/${post.slug}`}
              className="hover:underline text-blue-500 hover:text-blue-700"
            >
              {post.metadata.title}
            </a>
            {/* </p> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
