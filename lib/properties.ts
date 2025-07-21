export interface Property {
  id: number
  title: string
  address: string
  price: number // Alterado para número para facilitar a filtragem
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
    title: 'Apartamento Moderno no Centro',
    address: 'Rua das Flores, 123, São Paulo',
    price: 2500,
    priceFormatted: 'R$ 2.500/mês',
    type: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
  },
  {
    id: 2,
    title: 'Casa Espaçosa com Quintal',
    address: 'Avenida das Árvores, 456, Campinas',
    price: 4000,
    priceFormatted: 'R$ 4.000/mês',
    type: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    bedrooms: 3,
    bathrooms: 3,
    area: 150,
  },
  {
    id: 3,
    title: 'Cobertura Duplex com Vista',
    address: 'Praça da Liberdade, 789, Belo Horizonte',
    price: 7500,
    priceFormatted: 'R$ 7.500/mês',
    type: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    bedrooms: 4,
    bathrooms: 4,
    area: 220,
  },
  {
    id: 4,
    title: 'Casa Térrea em Condomínio',
    address: 'Alameda dos Pássaros, 101, Curitiba',
    price: 3200,
    priceFormatted: 'R$ 3.200/mês',
    type: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-5de67d216b0b?q=80&w=800',
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
  },
]

export const featuredProperties = allProperties.slice(0, 3)