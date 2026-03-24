export default function NewArrivalsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Fresh Drops
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            New Bundle Arrivals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <BundleCard
            branch="Jam's Branded Collection"
            title="T-shirts Bundle"
            description="50+ pieces"
            image="/images/pic1.png"
          />

          <BundleCard
            branch="Mandaue Branch"
            title="T-shirts Bundle"
            description="100+ pieces"
            image="/images/pic1.png"
          />
        </div>
      </div>
    </section>
  );
}

function BundleCard({ branch, title, description, image }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover group-hover:scale-105 transition"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* content */}
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm opacity-90">{branch}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}
