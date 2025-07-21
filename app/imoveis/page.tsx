"use client"

import { useMemo, useState } from "react"
import { PropertyCard } from "components/PropertyCard"
import { allProperties, Property } from "lib/properties"
import { Home, Search, SlidersHorizontal, Wallet, X } from "lucide-react"

export default function SearchPage() {
  // Estado dos filtros
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("todos")
  const [maxPrice, setMaxPrice] = useState(10000)

  // Lógica de filtragem
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const searchMatch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
      const typeMatch = propertyType === "todos" || property.type === propertyType
      const priceMatch = property.price <= maxPrice
      return searchMatch && typeMatch && priceMatch
    })
  }, [searchTerm, propertyType, maxPrice])

  // Função para limpar os filtros
  const clearFilters = () => {
    setSearchTerm("")
    setPropertyType("todos")
    setMaxPrice(10000)
  }

  return (
    <div className="bg-base-200">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Cabeçalho com Copywriting */}
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-primary text-4xl font-bold tracking-tight sm:text-5xl">
            Sua busca pelo imóvel dos sonhos começa aqui.
          </h1>
          <p className="text-base-content/70 mt-4 text-lg">
            Filtre as opções e encontre exatamente o que você procura, com a facilidade que você merece.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:items-start">
          {/* Seção de Filtros Sticky */}
          <aside className="lg:sticky lg:top-24">
            <div className="card bg-base-100 shadow-xl" data-aos="fade-right">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h2 className="card-title text-lg">
                    <SlidersHorizontal className="mr-2" />
                    Filtros
                  </h2>
                  <button onClick={clearFilters} className="btn btn-ghost btn-sm text-primary">
                    <X className="mr-1 size-4" />
                    Limpar
                  </button>
                </div>

                <div className="mt-4 space-y-6">
                  {/* Filtro de Texto */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Localização ou Palavra-chave</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <Search className="text-base-content/40 size-4" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="grow"
                        placeholder="Ex: Apartamento no Centro"
                      />
                    </label>
                  </div>

                  {/* Filtro de Tipo */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tipo de Imóvel</span>
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="select select-bordered"
                    >
                      <option value="todos">Todos os Tipos</option>
                      <option value="Apartamento">Apartamento</option>
                      <option value="Casa">Casa</option>
                    </select>
                  </div>

                  {/* Filtro de Preço */}
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Preço Máximo</span>
                      <span className="text-primary font-bold">R$ {maxPrice.toLocaleString("pt-BR")}</span>
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="500"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="range range-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Seção de Resultados */}
          <main className="lg:col-span-3">
            <p className="text-base-content/60 mb-6 text-sm">
              Exibindo <strong>{filteredProperties.length}</strong>{" "}
              {filteredProperties.length === 1 ? "imóvel" : "imóveis"}.
            </p>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {filteredProperties.map((property: Property, index) => (
                  <div key={property.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="bg-base-100 flex flex-col items-center justify-center rounded-lg py-24 text-center shadow-lg"
                data-aos="zoom-in"
              >
                <Home className="text-primary/50 size-16" />
                <h3 className="mt-4 text-xl font-semibold">Nenhum imóvel corresponde à sua busca</h3>
                <p className="text-base-content/60 mt-2">
                  Que tal ajustar os filtros para encontrar novas possibilidades?
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
