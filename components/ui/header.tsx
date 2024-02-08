import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'
import LanguageChanger from "@/components/language-changer";
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          <div className="shrink-0 mr-5">
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center font-medium"></ul>
            <ThemeToggle className="ml-3" />
            <ul className="flex ml-3 justify-end flex-wrap items-center">
              <li>
                <LanguageChanger />
              </li>
            </ul>
          </nav>
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
