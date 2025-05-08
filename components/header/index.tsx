"use client";

import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export const navItems = [
	{
		label: "Home",
		href: "#hero",
		target: false,
	},
	{
		label: "About Me",
		href: "#about",
		target: false,
	},
	{
		label: "Skills",
		href: "#skills",
		target: false,
	},
	{
		label: "Experience",
		href: "#experience",
		target: false,
	},
	{
		label: "Projects",
		href: "#projects",
		target: false,
	},
	{
		label: "Contact",
		href: "#contact",
		target: false,
	},
];

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();
	const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);
	const headerScale = useTransform(scrollY, [0, 50], [1, 1]);
	const headerY = useTransform(scrollY, [0, 50], [0, 8]);

	useEffect(() => {
		const scrollThreshold = 10;

		let timeoutId: ReturnType<typeof setTimeout> | null = null;

		const handleScroll = () => {
			if (timeoutId) return;

			timeoutId = setTimeout(() => {
				const isScrolled = window.scrollY > scrollThreshold;
				if (isScrolled !== scrolled) {
					setScrolled(isScrolled);
				}
				timeoutId = null;
			}, 10);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [scrolled]);

	return (
		<motion.header
			style={{
				opacity: headerOpacity,
				y: headerY,
			}}
			className={cn(
				"fixed top-0 left-0 right-0 w-full z-50 py-4 px-4",
				scrolled
					? "flex justify-center transition-all duration-300 ease-out"
					: "transition-all duration-200 ease-in",
			)}
		>
			<motion.div
				style={{ scale: headerScale }}
				className={cn(
					"container flex items-center justify-between sm:w-fit mx-auto py-2 border border-transparent rounded-full will-change-transform transition-all duration-300 ease-out",
					scrolled
						? "shadow-lg bg-background/95 backdrop-blur-xl border-purple-400/10 px-6 dark:bg-background/80"
						: "bg-transparent px-6",
				)}
			>
				<motion.div
					transition={{ duration: 0.2 }}
					className="flex items-center"
				>
					<Link
						href="/#hero"
						aria-label="Home page"
						className="flex items-center shrink-0"
					>
						<Logo />
					</Link>
				</motion.div>

				<div className="hidden sm:flex items-center gap-8 ml-8">
					<DesktopNav navItems={navItems} />
				</div>

				<div className="flex items-center sm:hidden ml-4">
					<MobileNav navItems={navItems} />
				</div>
			</motion.div>
		</motion.header>
	);
}
