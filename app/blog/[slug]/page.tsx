import { notFound } from 'next/navigation'
import { posts } from 'lib/posts'

// Define the props type using an interface or type alias.
// This is the standard and most robust way to type page props in the App Router.
type PostPageProps = {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    // This will render the not-found.tsx file or a default 404 page.
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose dark:prose-invert lg:prose-xl">
        <p className="text-base text-gray-500">{post.date} por {post.author}</p>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

// Optional: Function to generate static paths for your posts at build time.
// This improves performance and SEO.
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}