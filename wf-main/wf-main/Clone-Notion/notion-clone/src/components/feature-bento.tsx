"use client"

import { useState } from "react"

export default function FeatureBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="px-4 py-20 bg-[#EDEDED] dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Insights */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col h-full min-h-[420px] hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
            <div className="flex items-center space-x-2 mb-2">
              <img src="https://ext.same-assets.com/3422522520/2530104828.png" alt="AI icon" className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">AI Insights</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">Smart</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Personalized productivity tips.</h4>
            <div className="flex-1 flex items-center justify-center">
              <img src="https://ext.same-assets.com/3422522520/2409705249.png" alt="AI Insights" className="w-full rounded-lg max-h-48 object-contain" />
            </div>
          </div>

          {/* Pattern Recognition */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col h-full min-h-[420px] hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
            <div className="flex items-center space-x-2 mb-2">
              <img src="https://ext.same-assets.com/3422522520/4086035271.gif" alt="Pattern Recognition" className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Pattern Recognition</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">AI</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">See your work habits & trends.</h4>
            <div className="flex-1 flex items-center justify-center">
              <img src="https://ext.same-assets.com/3422522520/4086035271.gif" alt="Pattern Recognition" className="w-full rounded-lg max-h-48 object-contain" />
            </div>
          </div>

          {/* Workflow Optimization */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col h-full min-h-[420px] hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
            <div className="flex items-center space-x-2 mb-2">
              <img src="https://ext.same-assets.com/3422522520/2907435289.png" alt="Workflow Optimization" className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Workflow Optimization</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-medium">New</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Automate & improve your flow.</h4>
            <div className="flex-1 flex items-center justify-center">
              <img src="https://ext.same-assets.com/3422522520/2907435289.png" alt="Workflow Optimization" className="w-full rounded-lg max-h-48 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
