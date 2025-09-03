import { Code, Database, Palette, Smartphone } from "lucide-react";
import Image from "next/image";
import Headshot from "@/public/headshot-removed.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/6 size-32 rounded-full bg-blue-500 mix-blend-multiply opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-1/6 size-40 rounded-full bg-purple-500 mix-blend-multiply opacity-15 blur-xl"></div>
      </div>

      <div className="container grid grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-sans text-6xl md:text-7xl font-bold text-neutral-800 mb-6">
              About Me
            </h2>
            <p className="font-mono text-lg text-neutral-600 max-w-xl leading-relaxed">
              Full-stack developer with 6 years of experience building modern,
              performant, and scalable web applications. I thrive at the
              intersection of elegant design and robust engineering, with a
              current focus on AI-assisted development and mobile solutions.
            </p>
          </div>

          {/* Simplified Skills List */}
          <div className="font-sans text-neutral-700 border-t border-neutral-300 pt-6">
            <h3 className="font-bold text-lg mb-4 tracking-widest uppercase text-neutral-500">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-md">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>React & React Native</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>TailwindCSS</span>
            </div>
          </div>

          {/* Integrated Stats */}
          <div className="flex gap-12 pt-4">
            <div>
              <span className="block font-sans text-4xl font-bold text-neutral-800">
                6+
              </span>
              <span className="font-sans text-sm text-neutral-500 tracking-wider">
                Years Experience
              </span>
            </div>
            <div>
              <span className="block font-sans text-4xl font-bold text-neutral-800">
                20+
              </span>
              <span className="font-sans text-sm text-neutral-500 tracking-wider">
                Projects Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Circle Design */}
        <div className="flex justify-center items-center relative">
          <div className="relative size-128">
            {/* Dashed Circle - Top Half (behind image) */}
            <div className="absolute inset-0 -z-10">
              <svg
                className="w-full h-full stroke-gray-600"
                viewBox="0 0 384 384"
              >
                <title>Decorative Circle</title>
                <path
                  d="M 32 192 A 160 160 0 0 1 352 192"
                  fill="none"
                  stroke="inherit"
                  strokeWidth="2"
                  strokeDasharray="10 6"
                />
              </svg>
            </div>

            {/* Image */}
            <div className="absolute inset-0 flex justify-center items-end">
              <Image src={Headshot} alt="Morgan Stovold" className="w-84" />
            </div>

            {/* Dashed Circle - Bottom Half (in front of image) */}
            <div className="absolute inset-0 -z-10">
              <svg
                className="w-full h-full stroke-gray-600"
                viewBox="0 0 384 384"
              >
                <title>Decorative Circle</title>
                <path
                  d="M 352 192 A 160 160 0 0 1 192 352 A 160 160 0 0 1 32 192"
                  fill="none"
                  stroke="inherit"
                  strokeWidth="2"
                  strokeDasharray="10 6"
                />
              </svg>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
