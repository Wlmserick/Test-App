import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "./search"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-blue-900 backdrop-blur-md border-b border-gray-100 dark:border-blue-900">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Name */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">WorkFlow</span>
            </div>
          </div>

          {/* Search, Notifications, Profile, Theme Toggle */}
          <div className="flex items-center space-x-3">
            <Search />
            {/* Notifications Bell */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white dark:ring-gray-900 bg-red-500"></span>
            </button>
            {/* User Profile Dropdown (placeholder) */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                <img src="https://ui-avatars.com/api/?name=WF" alt="Profile" className="h-7 w-7 rounded-full" />
                <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">Profile</span>
              </button>
              {/* Dropdown would go here */}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
