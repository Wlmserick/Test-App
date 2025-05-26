import { Button } from "@/components/ui/button"

export default function SearchSection() {
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find anything with one search.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Search across your company knowledge and apps, right inside Notion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
              Try for free
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Request a demo
            </Button>
          </div>
        </div>

        {/* Integration logos */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Integrates with</h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Slack"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Slack</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Google Drive"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Google Drive</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="GitHub"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Jira"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Jira</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="MS Teams"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">MS Teams</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="SharePoint"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">SharePoint</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="OneDrive"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">OneDrive</span>
            </div>
          </div>
        </div>

        {/* Coming soon section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Coming soon</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Gmail"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Gmail</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Linear"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Linear</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Zendesk"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Zendesk</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Salesforce"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Salesforce</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Box"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm text-gray-600">Box</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
