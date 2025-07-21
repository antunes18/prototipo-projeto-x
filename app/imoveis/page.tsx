'use client'

import { useMemo, useState } from 'react'
import { PropertyCard } from 'components/PropertyCard'
import { allProperties } from 'lib/properties'
import type { Property } from 'lib/properties'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [propertyType, setPropertyType] = useState('todos')
  const [maxPrice, setMaxPrice] = useState(10000)

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const searchMatch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
      const typeMatch = propertyType === 'todos' || property.type === propertyType
      const priceMatch = property.price <= maxPrice
      return searchMatch && typeMatch && priceMatch
    })
  }, [searchTerm, propertyType, maxPrice])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Encontre seu Imóvel</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Use os filtros abaixo para refinar sua busca.
        </p>
      </div>

      {/* Filter Section */}
      <div className="my-8 grid grid-cols-1 gap-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:grid-cols-3">
        {/* Search by Text */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Buscar por nome ou endereço
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Ex: Apartamento no Centro"
          />
        </div>

        {/* Filter by Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tipo de Imóvel
          </label>
          <select
            id="type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="todos">Todos os Tipos</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
          </select>
        </div>

        {/* Filter by Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Preço Máximo: R$ {maxPrice.toLocaleString('pt-BR')}
          </label>
          <input
            type="range"
            id="price"
            min="1000"
            max="10000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        </div>
      </div>

      {/* Results Section */}
      <div>
        <p className="mb-6 text-sm text-gray-500">
          {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
        </p>
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property: Property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-24 text-center dark:border-gray-700">
            <h3 className="text-xl font-semibold">Nenhum imóvel encontrado</h3>
            <p className="mt-2 text-gray-500">Tente ajustar os seus filtros de busca.</p>
          </div>
        )}
      </div>
    </div>
  )
}