export default function Projects() {
  const projects = [
    {
      title: "FieldJolt",
      category: "SAAS PLATFORM",
      status: "In Development",
      description:
        "All-in-one field service management platform featuring extensible CRM, intelligent scheduling, dispatching, inventory management, invoicing, and proposal generation. Built for scalability and performance.",
      tags: ["Next.js", "PlanetScale", "Stripe", "QuickBooks", "Cloudflare"],
      metrics: ["Multi-tenant SaaS", "Real-time Sync", "API Integrations"],
      link: "#",
      featured: true,
    },
    {
      title: "East Bay Blinds",
      category: "E-COMMERCE WEBSITE",
      status: "Live",
      description:
        "Complete redesign and development of a modern, fresh website for a window treatment company. Delivered a performant, SEO-optimized solution that significantly improved user experience and conversion rates.",
      tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
      metrics: ["7 Day Delivery", "100% PageSpeed", "Mobile First"],
      link: "https://www.eastbayblinds.com/",
      featured: false,
    },
    {
      title: "Kelly Baldwin Realtor",
      category: "LUXURY REAL ESTATE",
      status: "Live",
      description:
        "Sophisticated website for a local realtor emphasizing luxury aesthetics and premium user experience. Features property showcases, contact forms, and optimized performance across all devices.",
      tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
      metrics: ["10 Day Delivery", "Luxury Design", "SEO Optimized"],
      link: "https://kellybaldwin-realtor.vercel.app/",
      featured: true,
    },
    {
      title: "Got Plate Lunch",
      category: "RESTAURANT WEBSITE",
      status: "90% Complete",
      description:
        "Modern, responsive website for a local Hawaiian restaurant. Features menu displays, online ordering preparation, and location information with a focus on mobile user experience.",
      tags: ["Next.js", "Tailwind CSS", "Mobile First"],
      link: "https://gotplatelunch.vercel.app/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-gray-900">
            Selected Works
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 mt-6 max-w-2xl mx-auto">
            Delivering high-performance websites with rapid turnaround times.
            Specializing in modern web solutions that drive business results.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group ${project.featured ? "lg:row-span-2" : ""}`}
            >
              <div className="h-full bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-500 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs tracking-[0.15em] text-gray-400">
                    {project.category} •{" "}
                    {project.status === "In Development"
                      ? "IN DEVELOPMENT"
                      : project.status === "Live"
                        ? "LIVE"
                        : "90% COMPLETE"}
                  </p>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500"
                        : project.status === "In Development"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Metrics for featured */}
                {project.featured && (
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-t border-gray-200">
                    {project.metrics?.map((metric) => (
                      <div key={metric} className="text-center">
                        <p className="text-sm text-gray-700">{metric}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View link */}
                {project.link !== "#" && (
                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
            ⚡ Available for immediate start
          </div>
          <p className="text-lg font-light text-gray-600 mt-4">
            Looking for a fast, reliable developer? Let's discuss your next
            project.
          </p>
        </div>
      </div>
    </section>
  );
}
