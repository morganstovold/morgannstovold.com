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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-border/20 -top-96 -left-96 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full border border-border/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-border/20 -bottom-72 -right-72 transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="space-y-10">
          {/* Small intro text */}
          <div className="text-center">
            <p className="text-foreground-secondary text-sm uppercase tracking-[0.3em] font-mono">
              Full-stack Developer
            </p>
          </div>

          {/* Main heading with more sophisticated typography */}
          <h1 className="text-center">
            <span className="block text-[clamp(3rem,8vw,7rem)] font-playfair font-light leading-[0.9] text-foreground mb-4">
              Creative
            </span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] font-playfair font-light leading-[0.9] text-foreground italic">
              Developer
            </span>
          </h1>

          {/* Refined description */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-foreground-secondary text-lg leading-relaxed font-light">
              I craft maintainable, clean, and understandable code. Building
              digital experiences where engineering excellence meets thoughtful
              design.
            </p>
          </div>

          {/* Call to action buttons - more refined */}
          <div className="flex gap-6 justify-center items-center">
            <Button size="lg" rounded>
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" rounded variant="outline">
              Learn more about me
            </Button>
          </div>

          {/* Stats or credentials - subtle luxury touch */}
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <span className="block text-2xl font-light text-foreground">
                6+
              </span>
              <span className="text-xs uppercase tracking-wider text-foreground-tertiary">
                Years Experience
              </span>
            </div>
            <div className="w-px h-12 bg-border/30 self-center" />
            <div className="text-center">
              <span className="block text-2xl font-light text-foreground">
                DVC → UC Berkeley
              </span>
              <span className="text-xs uppercase tracking-wider text-foreground-tertiary">
                Education Path
              </span>
            </div>
            <div className="w-px h-12 bg-border/30 self-center" />
            <div className="text-center">
              <span className="block text-2xl font-light text-foreground">
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
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground-tertiary to-transparent opacity-40" />
      </div>
    </section>
  );
}
