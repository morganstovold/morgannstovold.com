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
        <div className="absolute top-1/4 left-1/4 size-32 rounded-full bg-blue-500 mix-blend-multiply opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 size-40 rounded-full bg-purple-500 mix-blend-multiply opacity-15 blur-xl"></div>
      </div>

      <div className="container grid grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-sans text-5xl font-black text-neutral-700 mb-4">
              About Me
            </h2>
            <p className="font-mono text-xl text-neutral-600 max-w-lg leading-relaxed">
              Full-stack developer with 6 years of experience building modern
              web applications. Currently exploring AI-assisted development and
              mobile solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-100 rounded-lg">
                <Code className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-neutral-700">
                  Frontend
                </h3>
                <p className="font-mono text-sm text-neutral-500">
                  Next.js, React, TypeScript
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-100 rounded-lg">
                <Database className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-neutral-700">
                  Backend
                </h3>
                <p className="font-mono text-sm text-neutral-500">
                  Node.js, PostgreSQL, APIs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-neutral-700">Mobile</h3>
                <p className="font-mono text-sm text-neutral-500">
                  React Native, Expo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-100 rounded-lg">
                <Palette className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-neutral-700">Design</h3>
                <p className="font-mono text-sm text-neutral-500">
                  TailwindCSS, Figma, UX
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <span className="block font-sans text-3xl font-black text-neutral-700">
                6+
              </span>
              <span className="font-mono text-sm text-neutral-500">
                Years Experience
              </span>
            </div>
            <div>
              <span className="block font-sans text-3xl font-black text-neutral-700">
                20+
              </span>
              <span className="font-mono text-sm text-neutral-500">
                Projects Delivered
              </span>
            </div>
            <div>
              <span className="block font-sans text-3xl font-black text-neutral-700">
                4+
              </span>
              <span className="font-mono text-sm text-neutral-500">
                Years Freelancing
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Circle Design */}
        <div className="flex justify-center items-center relative">
          <div className="relative size-128">
            {/* Dashed Circle - Top Half (behind image) */}
            <div className="absolute inset-0 -z-10">
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <title>Decorative Circle</title>
                <path
                  d="M 32 192 A 160 160 0 0 1 352 192"
                  fill="none"
                  stroke="rgb(115 115 115)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Image */}
            <div className="absolute inset-0 flex justify-center items-end">
              <Image src={Headshot} alt="Morgan Stovold" className="w-84" />
            </div>

            {/* Dashed Circle - Bottom Half (in front of image) */}
            <div className="absolute inset-0 -z-10">
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <title>Decorative Circle</title>
                <path
                  d="M 352 192 A 160 160 0 0 1 192 352 A 160 160 0 0 1 32 192"
                  fill="none"
                  stroke="rgb(115 115 115)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
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
