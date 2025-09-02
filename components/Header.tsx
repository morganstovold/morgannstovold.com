import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-10 px-12 flex justify-between">
      <span className="font-sans font-light text-2xl">MORGAN S.</span>
      <div className="flex gap-6 items-center uppercase font-mono text-sm tracking-widest">
        <Link
          href="#about"
          className="relative group text-gray-600 transition-all hover:text-gray-950"
        >
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 w-0 transition-all group-hover:w-full" />
          About
        </Link>
        <Link
          href="#projects"
          className="relative group text-gray-600 transition-all hover:text-gray-950"
        >
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 w-0 transition-all group-hover:w-full" />
          Projects
        </Link>
        <Link
          href="#skills"
          className="relative group text-gray-600 transition-all hover:text-gray-950"
        >
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 w-0 transition-all group-hover:w-full" />
          Skills
        </Link>
        <Link
          href="#experience"
          className="relative group text-gray-600 transition-all hover:text-gray-950"
        >
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 w-0 transition-all group-hover:w-full" />
          Experience
        </Link>
        <Link
          href="#contract"
          className="relative group text-gray-600 transition-all hover:text-gray-950"
        >
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 w-0 transition-all group-hover:w-full" />
          Contract
        </Link>
      </div>
    </header>
  );
}
