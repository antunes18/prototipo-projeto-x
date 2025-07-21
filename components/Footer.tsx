import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            Sobre Nós
          </Link>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            Blog
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            Contato
          </Link>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} ImóvelX. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}