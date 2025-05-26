import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="px-4 py-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
            Choose your plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Start with Personal for free. Upgrade when you need more.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Personal</h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Free
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Perfect for personal use
              </p>
              <Button className="w-full mb-6">Get started</Button>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited pages & blocks</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">5 MB file uploads</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Basic integrations</span>
                </div>
              </div>
            </div>

            {/* Personal Pro */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Personal Pro</h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                $4<span className="text-lg text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For power users who want it all
              </p>
              <Button className="w-full mb-6 bg-blue-500 hover:bg-blue-600">Upgrade</Button>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Everything in Personal</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited file uploads</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">30 day page history</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced blocks</span>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Team</h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                $8<span className="text-lg text-gray-600 dark:text-gray-400">/member/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Collaborate with unlimited teammates
              </p>
              <Button variant="outline" className="w-full mb-6">Start trial</Button>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Everything in Personal Pro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited team members</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Collaborative workspace</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Admin tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
