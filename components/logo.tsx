import { motion } from "motion/react";

export default function Logo() {
	return (
		<div className="flex items-center">
			<motion.div
				className="text-xl font-semibold tracking-wide"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
					MS
				</span>
			</motion.div>
		</div>
	);
}
