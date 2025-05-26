"use client"

import { useState } from "react"

export default function FeatureBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Meeting Notes */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard("ai-notes")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://ext.same-assets.com/3422522520/2530104828.png"
                alt="AI icon"
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">AI Meeting Notes</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">
                  New
                </span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Perfect notes every time.
            </h4>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3422522520/2409705249.png"
                alt="AI Meeting Notes interface"
                className={`w-full rounded-lg transition-transform duration-500 ${
                  hoveredCard === "ai-notes" ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/20 to-transparent group-hover:from-white/10 transition-all" />
            </div>
          </div>

          {/* Enterprise Search */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard("search")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Enterprise Search</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">
                  New
                </span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              One search for everything.
            </h4>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3422522520/4086035271.gif"
                alt="Enterprise Search interface"
                className={`w-full rounded-lg transition-transform duration-500 ${
                  hoveredCard === "search" ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* Projects */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard("projects")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Projects</h3>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Keep every plan on track.
            </h4>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3422522520/2907435289.png"
                alt="Projects interface"
                className={`w-full rounded-lg transition-transform duration-500 ${
                  hoveredCard === "projects" ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* Notion Mail */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard("mail")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Notion Mail</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">
                  New
                </span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              The inbox that thinks like you.
            </h4>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3422522520/2216857218.gif"
                alt="Notion Mail interface"
                className={`w-full rounded-lg transition-transform duration-500 ${
                  hoveredCard === "mail" ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* Business-in-a-box - spans 2 columns on larger screens */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group md:col-span-2 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard("business")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Business-in-a-box</h3>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Run your entire company.
            </h4>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3422522520/564805029.gif"
                alt="Business interface"
                className={`w-full rounded-lg transition-transform duration-500 ${
                  hoveredCard === "business" ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
