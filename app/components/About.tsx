export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
            ABOUT
          </p>
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-gray-900">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          {/* Left side - Story */}
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed font-light text-gray-700 mb-6">
                I'm an 18-year-old passionate developer currently studying
                Computer Science at Diablo Valley Community College, with plans
                to complete my master's at UC Berkeley.
              </p>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                With 6 years of programming experience, I've cultivated a deep
                understanding of both the technical and creative aspects of
                software development. My approach focuses on creating solutions
                that are not only functional but elegantly crafted.
              </p>
            </div>

            {/* Philosophy - no border, just typography */}
            <div className="pt-8">
              <p className="text-2xl font-playfair font-light italic leading-relaxed text-gray-800">
                "Code is poetry written for two audiences: machines and humans.
                I strive to make both experiences exceptional."
              </p>
            </div>
          </div>

          {/* Right side - Simplified education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
                EDUCATION JOURNEY
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="font-normal text-gray-900 mb-1">
                      Diablo Valley College
                    </p>
                    <p className="text-sm text-gray-500">
                      Computer Science • 2025 - Present
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Building strong foundations in algorithms, data
                      structures, and software engineering principles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="font-normal text-gray-600 mb-1">
                      UC Berkeley
                    </p>
                    <p className="text-sm text-gray-400">
                      Master's Degree • Future Goal
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Aspiring to deepen expertise in distributed systems and
                      machine learning applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple focus areas - no cards */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  FOCUS
                </p>
                <p className="text-gray-700">Clean Architecture</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  PASSION
                </p>
                <p className="text-gray-700">User Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
