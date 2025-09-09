import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background-dark py-24 md:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full border border-primary-foreground/10"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
            clipPath: "circle(40%)",
            transform: "translate(30%, -50%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Main CTA heading */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-light text-primary-foreground mb-4">
            Let's work together.
          </h2>
          <p className="text-xl font-light text-primary-foreground/60 mb-12">
            I'm available for freelance work.
          </p>

          {/* CTA Button with consistent styling */}
          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card text-card-foreground font-light tracking-wide rounded-full hover:bg-muted transition-all hover:scale-105 duration-300 text-lg"
          >
            SAY HELLO
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm font-light text-primary-foreground/40">
              © MORGAN STOVOLD {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
