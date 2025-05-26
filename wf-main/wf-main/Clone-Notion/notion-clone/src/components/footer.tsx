import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <img
              src="https://ext.same-assets.com/3422522520/322207032.svg"
              alt="Notion"
              className="h-8 w-8 mb-4"
            />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img
                  src="https://ext.same-assets.com/3422522520/1967388618.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img
                  src="https://ext.same-assets.com/3422522520/3760553615.svg"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img
                  src="https://ext.same-assets.com/3422522520/1565864488.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img
                  src="https://ext.same-assets.com/3422522520/3927218253.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img
                  src="https://ext.same-assets.com/3422522520/840275654.svg"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            © 2025 Notion Labs, Inc.
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Download</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Mac & Windows</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Web Clipper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
              <li><Link href="/templates" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">Templates</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Notion for</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Small business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Personal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Explore more</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
