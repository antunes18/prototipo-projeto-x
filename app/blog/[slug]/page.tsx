import { notFound } from 'next/navigation'
import { posts } from 'lib/posts'
import type { Metadata } from 'next'

// Definindo o tipo para os parâmetros que a página recebe
type Props = {
  params: { slug: string }
}

// Função para gerar metadados dinâmicos (título da página, etc.)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Não Encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

// O componente da página, agora usando o tipo 'Props' correto
export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
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

// Função para gerar os caminhos estáticos no momento do build
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}