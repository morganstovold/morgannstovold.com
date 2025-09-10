"use client";

import { Check, Copy, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "morgannstovold.work@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background-dark py-24 md:py-32 md:pb-24"
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
        <div className="max-w-7xl mx-auto px-6 text-center relative flex flex-col items-center">
          {/* Main CTA heading */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-light text-primary-foreground mb-4">
            Let's work together.
          </h2>
          <p className="text-xl font-light text-primary-foreground/60 mb-12">
            I'm available for freelance work.
          </p>

          {/* Email with copy functionality */}
          <button
            type="button"
            className="flex items-center gap-6 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group hover:bg-white/20 transition-colors"
            onClick={handleCopyEmail}
          >
            <Mail className="size-5 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" />
            <span className="text-primary-foreground/80 font-light tracking-wide text-[clamp(0.875rem,2vw,1rem)] select-none group-hover:text-primary-foreground">
              {email}
            </span>
            {copied ? (
              <Check className="size-5 text-green-400" />
            ) : (
              <Copy className="size-5 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
            )}
          </button>

          {/* Tooltip for copied state */}
          {copied && (
            <p className="absolute -bottom-10 text-sm text-green-400 animate-fade-in">
              Email copied to clipboard!
            </p>
          )}
        </div>
      </div>
      {/* Footer bottom */}d
      <div className="relative z-10 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm font-light text-primary-foreground/40">
              © MORGAN STOVOLD {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <Link
                href="https://www.instagram.com/morgan_stovold/"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/morganstovold"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/morgan-stovold-428b0b354/"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/morgan-stovold-428b0b354/"
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
