"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
	return (
		<section
			id="about"
			className="py-24 relative overflow-hidden flex items-center justify-center"
		>
			<div className="container px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<div className="space-y-2">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h2 className="text-3xl font-bold tracking-tight">
									<span className="bg-gradient-to-r from-purple-400/90 to-blue-400/90 bg-clip-text text-transparent">
										About Me
									</span>
								</h2>
							</motion.div>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-muted-foreground"
							>
								Full Stack Software Engineer with a passion for creating elegant
								solutions
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="space-y-4"
						>
							<p className="text-foreground/80 leading-relaxed">
								With over X years of experience in software development, I
								specialize in building scalable web applications and intuitive
								user interfaces. My approach combines technical expertise with
								creative problem-solving to deliver impactful solutions.
							</p>
							<p className="text-foreground/80 leading-relaxed">
								I'm particularly passionate about [specific areas/technologies]
								and have a track record of [specific achievements or
								specialties]. When I'm not coding, you'll find me [personal
								interests/hobbies].
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-wrap gap-3"
						>
							{["TypeScript", "React", "Node.js", "Next.js", "AWS"].map(
								(tech, index) => (
									<div
										key={tech}
										className="bg-purple-400/10 border border-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm"
									>
										{tech}
									</div>
								),
							)}
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-lg" />
						<Image
							src="/headshot.jpg"
							alt="About Me"
							fill
							className="object-cover object-top rounded-lg"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
