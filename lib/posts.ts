export interface Post {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  content: string
}

export const posts: Post[] = [
  {
    slug: '5-dicas-para-alugar-seu-primeiro-imovel',
    title: '5 Dicas Para Alugar Seu Primeiro Imóvel',
    excerpt: 'Alugar o primeiro imóvel pode ser um grande passo. Confira nossas dicas para tornar esse processo mais simples e seguro.',
    author: 'Equipe ImóvelX',
    date: '20 de Julho, 2025',
    content: '<p>Conteúdo completo do post aqui...</p>',
  },
  {
    slug: 'como-valorizar-seu-imovel-para-venda',
    title: 'Como Valorizar Seu Imóvel Para Venda',
    excerpt: 'Pequenas reformas e uma boa apresentação podem fazer toda a diferença no valor de venda do seu imóvel.',
    author: 'Equipe ImóvelX',
    date: '15 de Julho, 2025',
    content: '<p>Conteúdo completo do post aqui...</p>',
  },
]