"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "./ui/button";

// Static predefined dots to prevent hydration errors
const STATIC_DOTS = [
	{
		id: "blur-dot-1",
		width: "250px",
		height: "250px",
		left: "5%",
		top: "5%",
		background: "rgba(167, 139, 250, 0.3)", // purple-400
	},
	{
		id: "blur-dot-2",
		width: "200px",
		height: "200px",
		left: "85%",
		top: "15%",
		background: "rgba(96, 165, 250, 0.3)", // blue-400
	},
	{
		id: "blur-dot-3",
		width: "300px",
		height: "300px",
		left: "75%",
		top: "65%",
		background: "rgba(139, 92, 246, 0.3)", // purple-500
	},
	{
		id: "blur-dot-4",
		width: "220px",
		height: "220px",
		left: "25%",
		top: "75%",
		background: "rgba(147, 197, 253, 0.3)", // blue-300
	},
	{
		id: "blur-dot-6",
		width: "150px",
		height: "150px",
		left: "5%",
		top: "85%",
		background: "rgba(129, 140, 248, 0.3)", // indigo-400
	},
];

export default function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);

	return (
		<motion.section
			ref={heroRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="relative w-full h-screen flex items-center justify-center"
		>
			{/* Background blurred dots - using static values to prevent hydration errors */}
			<div className="absolute inset-0">
				{STATIC_DOTS.map((dot) => (
					<div
						key={dot.id}
						className="absolute rounded-full opacity-40"
						style={{
							width: dot.width,
							height: dot.height,
							left: dot.left,
							top: dot.top,
							background: dot.background,
							filter: "blur(60px)",
							transform: "translate3d(0, 0, 0)", // Force GPU acceleration
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
						<span className="block">
							<span className="bg-gradient-to-r from-purple-400/90 to-blue-400/90 bg-clip-text text-transparent">
								Morgan Stovold
							</span>
						</span>
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						<p className="mt-6 text-xl sm:text-2xl">
							<span className="bg-gradient-to-r from-foreground/80 to-foreground/60 bg-clip-text text-transparent">
								Full Stack Software Engineer & UI/UX Designer
							</span>
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
						className={cn(buttonVariants({ variant: "default" }))}
						href="#projects"
					>
						View Projects
					</Link>
					<Link
						className={cn(buttonVariants({ variant: "secondary" }))}
						href="#contact"
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
						repeatType: "loop",
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
						<path
							d="M12 5V19M12 19L5 12M12 19L19 12"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</motion.div>
			</div>
		</motion.section>
	);
}
