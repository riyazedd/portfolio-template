
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
	return (
		<section id="projects" className="py-14 px-2 sm:px-4 md:px-10 font-[Roboto_Mono] min-h-[80vh] md:h-screen flex flex-col justify-center">
			<motion.h2
				className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
			>
				Projects
			</motion.h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 max-w-6xl mx-auto px-4 md:px-0">
				{projects.map((project, idx) => (
					<motion.div
						key={idx}
						className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300 min-h-[340px]"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
						viewport={{ once: true }}
					>
						<img src={project.image} alt={project.title} className="rounded-lg mb-3 xs:mb-4 w-full object-cover aspect-video" />
						<h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 xs:mb-2">{project.title}</h3>
						<p className="text-gray-600 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">{project.description}</p>
						<a href={project.link} className="text-indigo-600 font-semibold hover:underline mt-auto text-sm xs:text-base py-2" target="_blank" rel="noopener noreferrer">
							View Project →
						</a>
					</motion.div>
				))}
			</div>
		</section>
	);
}
