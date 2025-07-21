// components/home/Hero.tsx
'use client'
import { Search } from 'lucide-react'

export function Hero() {
  const handleSearchClick = () => {
    document.getElementById('featured-properties')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero min-h-[60vh] bg-blue-600">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white">Onde começa o seu próximo capítulo.</h1>
          <p className="mb-5 text-lg text-blue-100">
            Busque, encontre e se apaixone pelo seu novo lar. Simples, digital e feito para você. <br /><br /><br />
          </p>
          <div
            className="form-control transition-all duration-300 focus-within:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="Busque por cidade ou bairro..."
                className="input input-bordered input-lg w-full text-base-content placeholder-white"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              />
              <br />
              <br />
              <button
                className="btn btn-lg btn-primary"
                onClick={handleSearchClick}
                aria-label="Buscar"
              >
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}