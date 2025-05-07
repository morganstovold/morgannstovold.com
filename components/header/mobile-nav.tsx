import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../theme-toggle";

interface NavItem {
	label: string;
	href: string;
	target: boolean;
}

interface MobileNavProps {
	navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<motion.button
					className="p-2 rounded-full hover:bg-accent/30 transition-colors relative"
					aria-label="Open menu"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<MenuIcon className="w-5 h-5 text-foreground/90 transition-colors" />
				</motion.button>
			</SheetTrigger>
			<SheetContent
				side="right"
				className="border-l-0 bg-background/95 backdrop-blur-xl"
			>
				<div className="flex flex-col h-full">
					<SheetHeader className="border-b border-foreground/5 pb-4">
						<div className="flex justify-between items-center">
							<SheetTitle className="text-xl font-medium text-foreground/90">
								Menu
							</SheetTitle>
							<motion.button
								onClick={() => setOpen(false)}
								className="p-2 rounded-full hover:bg-accent/30 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<X className="w-5 h-5 text-foreground/80" />
							</motion.button>
						</div>
					</SheetHeader>

					<nav className="flex flex-col gap-1 pt-6 flex-grow">
						<AnimatePresence>
							{navItems.map((item, index) => (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ delay: index * 0.05 + 0.1 }}
								>
									<Link
										href={item.href}
										target={item.target ? "_blank" : undefined}
										onClick={() => setOpen(false)}
										className="block px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors font-medium text-foreground/80 hover:text-foreground relative group"
									>
										<div className="flex items-center">
											<span>{item.label}</span>
										</div>
										<span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-purple-400/80 to-blue-400/80 transition-all duration-300 group-hover:w-1/4" />
									</Link>
								</motion.div>
							))}
						</AnimatePresence>
					</nav>

					<div className="mt-auto py-4 px-4 border-t border-foreground/5">
						<div className="flex items-center justify-between">
							<span className="text-sm text-foreground/60">Switch Theme</span>
							<ModeToggle />
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
