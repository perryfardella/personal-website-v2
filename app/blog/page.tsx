import { promises as fs } from "fs";
import path from "path";

// Function to get all blog posts
async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog");
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map(async (directory) => {
        const fullPath = path.join(postsDirectory, directory.name, "page.mdx");
        try {
          // Dynamic import of the MDX file
          const module = await import(`./${directory.name}/page.mdx`);
          return {
            slug: directory.name,
            metadata: module.metadata,
          };
        } catch (e) {
          console.error(`Error loading ${fullPath}:`, e);
          return null;
        }
      })
  );

  // Filter out any null entries and sort by publishedAt date
  return posts.filter(Boolean).sort(
    // TODO: typing
    (a: any, b: any) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-6">Blog Posts</h1> */}
      <div className="space-y-8">
        {/* // TODO: typing */}
        {posts.map((post: any) => (
          <article key={post.slug} className="space-y-2">
            <h2>
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.metadata.title}
              </a>
            </h2>
            <div className="text-sm">
              {new Date(post.metadata.publishedAt).toLocaleDateString()}
            </div>
            {post.metadata.summary && (
              <p className="">{post.metadata.summary}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog",
};
