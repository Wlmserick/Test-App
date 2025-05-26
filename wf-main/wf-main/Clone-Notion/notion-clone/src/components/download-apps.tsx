export default function DownloadApps() {
  return (
    <section className="px-4 py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mac & Windows */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow border border-gray-100 dark:border-gray-700">
            <img src="/icons/mac.svg" alt="Mac" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Mac</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mb-1">Download for Mac</a>
            <img src="/icons/windows.svg" alt="Windows" className="w-10 h-10 mt-6 mb-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Windows</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Download for Windows</a>
          </div>
          {/* iOS */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow border border-gray-100 dark:border-gray-700">
            <img src="/icons/ios.svg" alt="iOS" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">iOS</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Download on the App Store</a>
          </div>
          {/* Android */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow border border-gray-100 dark:border-gray-700">
            <img src="/icons/android.svg" alt="Android" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Android</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Get it on Google Play</a>
          </div>
          {/* Web */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow border border-gray-100 dark:border-gray-700">
            <img src="/icons/web.svg" alt="Web" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Web</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Open in your browser</a>
          </div>
        </div>
      </div>
    </section>
  );
}
