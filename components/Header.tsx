// components/Header.tsx
import Link from 'next/link'
import { Menu } from 'lucide-react'

export function Header() {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/imoveis">Buscar Imóveis</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </>
  )

  return (
    <header className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="navbar-start">

          <Link href="/" className="btn btn-ghost text-2xl font-bold text-primary">
            MR Imóveis by Jean Dias
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary hidden sm:inline-flex">Anunciar Imóvel</a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <li className="sm:hidden">
                <a className="btn btn-primary btn-sm mt-2">Anunciar</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}