export default function TeamSection() {
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One space for every team.
          </h2>
          <p className="text-xl text-gray-600">
            More productivity. Fewer tools.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://ext.same-assets.com/3422522520/2116589346.svg"
              alt="Team collaboration interface"
              className="w-full max-w-4xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
