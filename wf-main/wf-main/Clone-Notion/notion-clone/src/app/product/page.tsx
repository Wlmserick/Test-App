import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
            One workspace.
            <br />
            Every team.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We're more than a doc. Or a table. Customize Notion to work the way you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white px-8 py-3 text-lg">
              Try Notion free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Request a demo
            </Button>
          </div>
        </div>

        {/* Product Features */}
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Blocks</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mix and match to create the perfect workspace for your team.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Databases</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Store, organize, and retrieve information with powerful databases.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Assistant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let AI help you write, summarize, and organize your content.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
