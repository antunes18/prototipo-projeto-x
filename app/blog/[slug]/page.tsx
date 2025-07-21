import { notFound } from 'next/navigation'
import { posts } from 'lib/posts'

// Define the expected props structure directly in the function signature
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    // This will render the not-found.tsx file if you have one, or a default 404 page
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose dark:prose-invert lg:prose-xl">
        <p className="text-base text-gray-500">{post.date} por {post.author}</p>
        <h1>{post.title}</h1>
        {/* Using dangerouslySetInnerHTML is fine here since the content is coming from a trusted local source (lib/posts.ts) */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}