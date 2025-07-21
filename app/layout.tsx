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
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <Analytics />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}