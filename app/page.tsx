"use client";

import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Hero />
			<About />

			{/* Other sections will go here */}
			<div id="skills" />
			<div id="experience" />
			<div id="projects" />
			<div id="contact" />
		</div>
	);
}
