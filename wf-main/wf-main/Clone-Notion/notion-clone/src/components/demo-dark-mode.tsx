"use client"

import { useEffect } from "react"

export default function DemoDarkMode() {
  useEffect(() => {
    // Auto toggle to dark mode after 3 seconds for demo
    const timer = setTimeout(() => {
      document.documentElement.classList.add("dark")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
