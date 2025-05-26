"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative px-4 pt-16 pb-20 bg-white dark:bg-gray-900">
      {/* AI Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 text-sm">
          <span className="text-gray-600">All-in-one AI, right where you work.</span>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Try Notion AI free
          </a>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center mt-12">
        {/* Main Headline */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          The AI workspace that{" "}
          <br className="hidden md:block" />
          works for you.
        </h1>

        {/* Subheading */}
        <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          One place where teams find every answer, automate the busywork, and get projects done.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Get Notion free
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
            Request a demo
          </Button>
        </div>

        {/* Trusted by section */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-6">Trusted by top teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img
              src="https://ext.same-assets.com/3422522520/1786654542.svg"
              alt="OpenAI"
              className="h-8 grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Ramp"
              className="h-8 grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://ext.same-assets.com/3422522520/2506134835.svg"
              alt="Ramp"
              className="h-8 grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://ext.same-assets.com/3422522520/1052682297.svg"
              alt="Vercel"
              className="h-8 grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
