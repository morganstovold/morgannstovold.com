"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "py-4 md:py-6 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="group">
          <span
            className={`font-playfair text-xl md:text-2xl font-normal transition-colors duration-200 ${
              scrolled ? "text-neutral-950" : "text-neutral-800"
            }`}
          >
            MORGAN
            <span className="text-neutral-500 ml-1 font-light italic">S.</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#about"
            className={`relative text-sm font-normal transition-colors duration-200 tracking-wide ${
              scrolled
                ? "text-neutral-500 hover:text-neutral-950"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`relative text-sm font-normal transition-colors duration-200 tracking-wide ${
              scrolled
                ? "text-neutral-500 hover:text-neutral-950"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`relative text-sm font-normal transition-colors duration-200 tracking-wide ${
              scrolled
                ? "text-neutral-500 hover:text-neutral-950"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-background-dark text-white font-normal tracking-wide rounded-full border border-transparent hover:border-neutral-400 hover:bg-background hover:text-background-dark transition-colors duration-200 text-sm"
          >
            CONTACT
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              className="p-2 text-neutral-700 hover:text-neutral-950 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-[320px] bg-white p-0 flex flex-col"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="px-6 py-6 border-b border-neutral-100">
              <span className="font-playfair text-2xl font-normal text-neutral-950">
                MORGAN
                <span className="text-neutral-500 ml-1 font-light italic">
                  S.
                </span>
              </span>
            </div>

            <nav className="flex flex-col flex-1 px-6">
              <Link
                href="#about"
                onClick={handleLinkClick}
                className="text-neutral-700 hover:text-neutral-950 py-3 text-base font-normal transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                onClick={handleLinkClick}
                className="text-neutral-700 hover:text-neutral-950 py-3 text-base font-normal transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                onClick={handleLinkClick}
                className="text-neutral-700 hover:text-neutral-950 py-3 text-base font-normal transition-colors"
              >
                Projects
              </Link>

              <div className="mt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background-dark text-white font-normal tracking-wide rounded-full border border-transparent hover:border-neutral-400 hover:bg-background hover:text-background-dark transition-colors duration-200 text-sm"
                >
                  CONTACT
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </nav>

            <div className="px-6 py-6 border-t border-neutral-100 mt-auto">
              <p className="text-xs text-neutral-400 text-center">
                © {new Date().getFullYear()} Morgan Stovold
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
