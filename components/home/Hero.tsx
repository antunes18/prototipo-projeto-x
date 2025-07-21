export function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Encontre o seu próximo lar.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          A forma mais simples, rápida e segura de alugar ou comprar imóveis.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Search Bar Placeholder */}
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por cidade, bairro ou rua..."
                className="w-full rounded-full px-6 py-4 text-gray-900"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-700 px-6 py-2.5 text-white hover:bg-blue-800"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}