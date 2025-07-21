export interface Property {
  id: number
  title: string
  address: string
  price: number
  priceFormatted: string
  type: 'Apartamento' | 'Casa'
  imageUrl: string
  bedrooms: number
  bathrooms: number
  area: number
}

export const allProperties: Property[] = [
  {
    id: 1,
    title: 'Apartamento de Luxo no Setor Marista',
    address: 'Rua 1128, Setor Marista, Goiânia',
    price: 6500,
    priceFormatted: 'R$ 6.500/mês',
    type: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    bedrooms: 3,
    bathrooms: 3,
    area: 140,
  },
  {
    id: 2,
    title: 'Casa Moderna em Condomínio Fechado',
    address: 'Avenida das Nações, Jundiaí, Anápolis',
    price: 4800,
    priceFormatted: 'R$ 4.800/mês',
    type: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
  },
  {
    id: 3,
    title: 'Apartamento com Varanda Gourmet',
    address: 'Alameda Ricardo Paranhos, Setor Sul, Goiânia',
    price: 3800,
    priceFormatted: 'R$ 3.800/mês',
    type: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
  },
  {
    id: 4,
    title: 'Casa Térrea no Setor Morada do Sol',
    address: 'Rua das Orquídeas, Morada do Sol, Rio Verde',
    price: 3200,
    priceFormatted: 'R$ 3.200/mês',
    type: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
  },
  {
    id: 5,
    title: 'Apartamento Compacto no Setor Bueno',
    address: 'Avenida T-4, Setor Bueno, Goiânia',
    price: 2200,
    priceFormatted: 'R$ 2.200/mês',
    type: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
  },
]

export const featuredProperties = allProperties.slice(0, 3)