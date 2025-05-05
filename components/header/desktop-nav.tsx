import { motion } from "motion/react";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";

interface NavItem {
  label: string;
  href: string;
  target: boolean;
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Link
            href={item.href}
            target={item.target ? "_blank" : undefined}
            className="relative py-1 items-center justify-center transition-colors group text-foreground/80 hover:text-foreground flex flex-col"
          >
            {item.label}
            <motion.span
              className="absolute bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400/80 to-blue-400/80 transition-all duration-300 group-hover:w-[110%]"
              layoutId={`underline-${item.label}`}
            />
          </Link>
        </motion.div>
      ))}
      <ModeToggle />
    </nav>
  );
}
