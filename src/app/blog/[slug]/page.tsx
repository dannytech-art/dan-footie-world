// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostData } from 'src/lib/posts';

// Add interface for type safety
interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getPostData(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.image || '/default-og-image.jpg'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostData(params.slug);
  
  if (!post) notFound();

  return (
    <article className="container mx-auto p-4 py-12 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>
      </header>
      
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}