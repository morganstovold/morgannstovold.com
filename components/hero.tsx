"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// Static predefined dots to prevent hydration errors
const STATIC_DOTS = [
  { id: "blur-dot-1", width: "196px", height: "153px", left: "36%", top: "17%", background: "rgba(214, 176, 68, 0.2)" },
  { id: "blur-dot-2", width: "76px", height: "113px", left: "81%", top: "86%", background: "rgba(246, 196, 86, 0.2)" },
  { id: "blur-dot-3", width: "79px", height: "195px", left: "28%", top: "97%", background: "rgba(180, 177, 172, 0.2)" },
  { id: "blur-dot-4", width: "80px", height: "134px", left: "51%", top: "20%", background: "rgba(216, 241, 59, 0.2)" },
  { id: "blur-dot-5", width: "175px", height: "171px", left: "93%", top: "2%", background: "rgba(172, 228, 75, 0.2)" },
  { id: "blur-dot-6", width: "78px", height: "74px", left: "38%", top: "71%", background: "rgba(188, 167, 106, 0.2)" },
  { id: "blur-dot-7", width: "61px", height: "157px", left: "78%", top: "5%", background: "rgba(241, 211, 51, 0.2)" },
  { id: "blur-dot-8", width: "171px", height: "53px", left: "96%", top: "12%", background: "rgba(177, 171, 237, 0.2)" },
  { id: "blur-dot-9", width: "60px", height: "197px", left: "7%", top: "31%", background: "rgba(246, 205, 196, 0.2)" },
  { id: "blur-dot-10", width: "58px", height: "169px", left: "93%", top: "77%", background: "rgba(167, 183, 81, 0.2)" },
  { id: "blur-dot-11", width: "132px", height: "116px", left: "73%", top: "41%", background: "rgba(237, 197, 111, 0.2)" },
  { id: "blur-dot-12", width: "84px", height: "196px", left: "30%", top: "11%", background: "rgba(206, 168, 202, 0.2)" },
  { id: "blur-dot-13", width: "100px", height: "178px", left: "59%", top: "79%", background: "rgba(167, 216, 107, 0.2)" },
  { id: "blur-dot-14", width: "192px", height: "93px", left: "62%", top: "75%", background: "rgba(241, 197, 73, 0.2)" },
  { id: "blur-dot-15", width: "82px", height: "106px", left: "33%", top: "0%", background: "rgba(187, 239, 104, 0.2)" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Spotlight gradient effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      />
      
      {/* Background blurred dots - using static values to prevent hydration errors */}
      <div className="absolute inset-0 overflow-hidden">
        {STATIC_DOTS.map((dot) => (
          <div 
            key={dot.id}
            className="absolute rounded-full opacity-20"
            style={{
              width: dot.width,
              height: dot.height,
              left: dot.left,
              top: dot.top,
              background: dot.background,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container z-10 px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            <span className="block">Morgan Stovold</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="mt-6 text-xl sm:text-2xl text-muted-foreground">
              Full Stack Software Engineer & UI/UX Designer
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link 
            href="#projects" 
            className="bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-full font-medium transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="#contact" 
            className="bg-background/10 backdrop-blur-sm border border-foreground/10 hover:bg-background/20 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
        
        {/* Animated arrow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            delay: 0.9,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop"
          }}
          className="absolute top-8/10"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Scroll down</title>
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
} 