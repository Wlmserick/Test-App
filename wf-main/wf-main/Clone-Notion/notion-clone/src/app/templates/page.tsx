import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TemplatesPage() {
  const templates = [
    {
      category: "Project Management",
      title: "Product Roadmap",
      description: "Plan and track your product development",
      image: "📊"
    },
    {
      category: "Documentation",
      title: "Engineering Wiki",
      description: "Document your technical knowledge",
      image: "⚙️"
    },
    {
      category: "Personal",
      title: "Weekly Planner",
      description: "Organize your week with style",
      image: "📅"
    },
    {
      category: "Team",
      title: "Meeting Notes",
      description: "Capture and share meeting outcomes",
      image: "📝"
    },
    {
      category: "Marketing",
      title: "Content Calendar",
      description: "Plan your content strategy",
      image: "📱"
    },
    {
      category: "Business",
      title: "OKRs Tracker",
      description: "Track objectives and key results",
      image: "🎯"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
              Templates to get you started
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Browse our library of templates to kick-start your next project.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white px-8 py-3 text-lg">
              Browse all templates
            </Button>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{template.image}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {template.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {template.description}
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
                  Use template
                </Button>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Browse by category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Business", "Personal", "Education", "Design", "Engineering", "Marketing", "Sales", "HR"].map((category) => (
                <div
                  key={category}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
