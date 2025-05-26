export default function CustomerStories() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-8">Customer stories</h2>

          {/* Featured testimonial */}
          <div className="mb-12">
            <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl">
              "There's power in a single platform where you can do all your work. Notion is that single place."
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/3422522520/1786654542.svg"
                alt="OpenAI"
                className="h-8"
              />
              <a href="#" className="ml-4 text-blue-600 hover:text-blue-700 font-medium">
                Read the full story
              </a>
            </div>
          </div>
        </div>

        {/* Customer logos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Toyota"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              Streamlined workflows to reduce timelines by 3x.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Ramp"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              With Notion, every person at Ramp has an AI assistant.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/1052682297.svg"
              alt="Vercel"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              Notion understands that you can solve a lot of problems with one tool.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Match"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              Notion has been the most powerful and impactful way to streamline our workflow.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Deel"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              Someone could join Deel and onboard themselves without ever speaking to anybody.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://ext.same-assets.com/3422522520/849522504.png"
              alt="Planful"
              className="h-8 mb-4"
            />
            <p className="text-gray-700 font-medium">
              From six apps to one: Scaling faster with all teams running on Notion AI.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">100M+</div>
            <div className="text-sm text-gray-600">users worldwide</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">#1</div>
            <div className="text-sm text-gray-600">knowledge base 3 years running (G2)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">62%</div>
            <div className="text-sm text-gray-600">of Fortune 100 use Notion</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">#1</div>
            <div className="text-sm text-gray-600">rated AI writing (G2)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50%+</div>
            <div className="text-sm text-gray-600">of YC companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">1.4M+</div>
            <div className="text-sm text-gray-600">community members</div>
          </div>
        </div>
      </div>
    </section>
  )
}
