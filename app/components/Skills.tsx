export default function Skills() {
  const skills = [
    {
      icon: "< />",
      title: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "JavaScript"],
      description: "Building performant, modern web applications",
    },
    {
      icon: "◈",
      title: "UI/UX Design",
      items: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Figma"],
      description: "Creating intuitive, beautiful user interfaces",
    },
    {
      icon: "⚙",
      title: "Backend & Database",
      items: ["Node.js", "PostgreSQL", "PlanetScale", "Prisma"],
      description: "Architecting scalable server solutions",
    },
    {
      icon: "◷",
      title: "Rapid Delivery",
      items: [
        "7-10 Day Turnaround",
        "Agile Development",
        "Client Communication",
        "Project Management",
      ],
      description: "Delivering quality projects on tight timelines",
    },
    {
      icon: "⚡",
      title: "SEO & Performance",
      items: [
        "Core Web Vitals",
        "Technical SEO",
        "Page Speed",
        "Accessibility",
      ],
      description: "Optimizing for search engines and user experience",
    },
    {
      icon: "☁",
      title: "Tools & Deployment",
      items: ["Git", "Vercel", "Cloudflare", "Stripe Integration"],
      description: "Streamlining deployment and operations",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
            EXPERTISE
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-light text-gray-900">
            Technical Proficiency
          </h2>
        </div>

        {/* Skills grid - mobile optimized with centered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-12 lg:gap-y-16 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.title} className="group">
              {/* Mobile: Card style, Desktop: Original minimal style */}
              <div className="sm:hidden bg-white rounded-xl p-6 shadow-sm">
                {/* Icon and title - centered on mobile */}
                <div className="flex flex-col items-center text-center mb-4">
                  <span className="text-3xl text-gray-400 mb-3">
                    {skill.icon}
                  </span>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-gray-500">{skill.description}</p>
                </div>

                {/* Skills tags - centered */}
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-light rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tablet and Desktop - Original design */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl text-gray-400">{skill.icon}</span>
                  <h3 className="text-lg font-normal text-gray-900">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white text-gray-600 text-xs font-light rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg leading-relaxed font-light text-gray-600">
            Specializing in rapid website development with a focus on
            performance, SEO, and exceptional user experience. Available for
            immediate project starts.
          </p>
        </div>
      </div>
    </section>
  );
}
