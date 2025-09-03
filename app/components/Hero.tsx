import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center relative">
      <div className="absolute top-0 left-0 isolate w-full h-full -z-10 blur-[100px]">
        <div className="absolute top-15 left-15 size-120 rounded-full bg-red-500 mix-blend-multiply opacity-30"></div>
        <div className="absolute bottom-15 right-15 size-120 rounded-full bg-orange-500 mix-blend-multiply opacity-30"></div>
      </div>
      <div className="flex flex-col gap-4 text-center justify-center items-center">
        <span className="font-sans text-6xl font-black text-neutral-700">
          MORGAN STOVOLD
        </span>
        <span className="font-mono text-2xl font-black text-neutral-700">
          Software Engineer & Architect
        </span>
      </div>
      <Link href="#about" className="absolute top-3/4 animate-bounce">
        <ArrowDown className="w-8 h-8 text-neutral-700" />
      </Link>
      <div className="absolute bottom-0 container border-b-4 border-dashed" />
    </div>
  );
}
