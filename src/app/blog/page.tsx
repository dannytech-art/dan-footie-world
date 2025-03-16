import Link from 'next/link';
import { getSortedPostsData } from 'src/lib/posts';

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold mb-3 hover:text-primary">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}