export default function DownloadApps() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Notion Desktop */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://ext.same-assets.com/3422522520/1195993520.svg"
                alt="Desktop icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get started on Notion
              </h3>
              <p className="text-gray-600 mb-4">Your AI workspace.</p>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <img
                  src="https://ext.same-assets.com/3422522520/3304711307.svg"
                  alt="Download icon"
                  className="w-6 h-6"
                />
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download for Mac
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Notion desktop preview"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Notion Mail */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://ext.same-assets.com/3422522520/3275288904.svg"
                alt="Mail icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Notion Mail
              </h3>
              <p className="text-gray-600 mb-4">The inbox that thinks like you.</p>
              <div className="mb-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Notion Mail preview"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Notion Calendar */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://ext.same-assets.com/3422522520/3272116947.svg"
                alt="Calendar icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Notion Calendar
              </h3>
              <p className="text-gray-600 mb-4">Time and work, together.</p>
              <div className="mb-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/3422522520/849522504.png"
                alt="Notion Calendar preview"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Notion is always at home right{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              in your browser
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
