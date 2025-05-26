import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "./search"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/3422522520/322207032.svg"
                alt="Notion"
                className="h-8 w-8"
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/product" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                Product
              </Link>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors flex items-center">
                Mail
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md font-medium">
                  New
                </span>
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                Calendar
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                AI
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                Enterprise
              </a>
              <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Search and CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Search />
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-sm">
              Request a demo
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-sm">
              Log in
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white text-sm px-4">
              Get Notion free
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
