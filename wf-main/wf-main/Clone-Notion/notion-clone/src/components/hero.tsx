"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative px-4 pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900">
      {/* AI Banner (modified for WorkFlow) */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 rounded-full px-4 py-2 text-sm">
          <span className="text-gray-600 dark:text-white">Smart productivity workspace that learns from your work patterns.</span>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center mt-12">
        {/* Main Headline (WorkFlow focus) */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          The smart workspace that
          <br className="hidden md:block" />
          adapts to you.
        </h1>

        {/* Subheading (WorkFlow focus) */}
        <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Boost your productivity with AI insights, pattern recognition, and workflow optimization—tailored for individuals.
        </p>

        {/* CTA Buttons (single-user focus) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Get WorkFlow free
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
            See pricing
          </Button>
        </div>

        {/* Trusted by section (optional, can be replaced with testimonials or removed) */}
        <div className="mb-8">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl border-t border-b border-gray-200 dark:border-blue-900 mb-6"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-white mb-6 text-center">Trusted by top creators</p>
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl mx-auto opacity-60">
            <div className="flex items-center justify-center">
              <img
                src="https://ext.same-assets.com/3422522520/1786654542.svg"
                alt="Figma"
                className="h-10 w-28 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex items-center justify-center">
              <span className="h-10 w-28 flex items-center justify-center font-bold text-orange-500 text-2xl tracking-wide select-none">Headspace</span>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://ext.same-assets.com/3422522520/1052682297.svg"
                alt="Vercel"
                className="h-10 w-28 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
