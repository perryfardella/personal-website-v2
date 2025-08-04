import { promises as fs } from "fs";
import path from "path";
import { InternalLink } from "./InternalLink";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
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
          const postModule = await import(`../blog/${directory.name}/page.mdx`);
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

export async function BlogPosts() {
  const posts = await getBlogPosts();

  return (
    <section>
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map((post: BlogPost) => (
          <li key={post.slug}>
            <InternalLink href={`/blog/${post.slug}`}>
              {post.metadata.title}
            </InternalLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
