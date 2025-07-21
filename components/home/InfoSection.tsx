'use client'

import AOS from 'aos'
import { CheckCircle2, FileText, Search } from 'lucide-react'
import { useEffect } from 'react'

export function InfoSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const features = [
    {
      icon: <Search className="size-8 text-blue-500" />,
      title: 'Busca Inteligente',
      description: 'Filtros avançados e mapa interativo para encontrar o imóvel perfeito para você.',
    },
    {
      icon: <FileText className="size-8 text-blue-500" />,
      title: 'Contratos Digitais',
      description: 'Assine seu contrato de aluguel ou compra de forma 100% digital e segura.',
    },
    {
      icon: <CheckCircle2 className="size-8 text-blue-500" />,
      title: 'Análise Descomplicada',
      description: 'Processo de análise de crédito rápido e transparente, sem a necessidade de fiador.',
    },
  ]

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Processo Simplificado
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
            Tudo o que você precisa, sem burocracia
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 150} key={feature.title} className="flex">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}