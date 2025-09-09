"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 px-4 sm:px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full border border-border/20 -top-48 sm:-top-72 md:-top-96 -left-48 sm:-left-72 md:-left-96 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute w-[500px] sm:w-[750px] md:w-[1000px] h-[500px] sm:h-[750px] md:h-[1000px] rounded-full border border-border/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
        <div
          className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full border border-border/20 -bottom-36 sm:-bottom-54 md:-bottom-72 -right-36 sm:-right-54 md:-right-72 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-8 md:space-y-10">
          {/* Small intro text */}
          <div className="text-center">
            <p className="text-foreground-secondary text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-mono">
              Full-stack Developer
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-center">
            <span className="block text-[clamp(2.5rem,10vw,7rem)] font-playfair font-light leading-[0.9] text-foreground mb-2 sm:mb-4">
              Creative
            </span>
            <span className="block text-[clamp(3rem,12vw,8rem)] font-playfair font-light leading-[0.9] text-foreground italic">
              Developer
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl mx-auto text-center px-4">
            <p className="text-foreground-secondary text-base sm:text-lg leading-relaxed font-light">
              I craft maintainable, clean, and understandable code. Building
              digital experiences where engineering excellence meets thoughtful
              design.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button size="lg" rounded className="w-full sm:w-auto">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              rounded
              variant="outline"
              className="w-full sm:w-auto"
            >
              Learn more about me
            </Button>
          </div>

          {/* Stats - responsive grid */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-12 pt-8">
            <div className="text-center">
              <span className="block text-xl sm:text-2xl font-light text-foreground">
                6+
              </span>
              <span className="text-xs uppercase tracking-wider text-foreground-tertiary">
                Years Experience
              </span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/30 self-center" />
            <div className="text-center">
              <span className="block text-xl sm:text-2xl font-light text-foreground">
                DVC → UC Berkeley
              </span>
              <span className="text-xs uppercase tracking-wider text-foreground-tertiary">
                Education Path
              </span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/30 self-center" />
            <div className="text-center">
              <span className="block text-xl sm:text-2xl font-light text-foreground">
                20+
              </span>
              <span className="text-xs uppercase tracking-wider text-foreground-tertiary">
                Projects Delivered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-foreground-tertiary to-transparent opacity-40" />
      </div>
    </section>
  );
}
