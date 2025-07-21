import type { Metadata } from "next"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Analytics } from "@vercel/analytics/next"
import "styles/globals.css"

export const metadata: Metadata = {
  title: "ImóvelX - O seu próximo lar",
  description: "Encontre, alugue ou compre imóveis de forma simples e digital.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light"> {/* Adicione um tema padrão da DaisyUI aqui */}
      <head>
        {/* Adicione a propriedade precedence="default" aqui */}
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
          precedence="default"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}