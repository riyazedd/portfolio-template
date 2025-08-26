import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function About(){
       return (
	       <section id="about" className="py-14 px-2 sm:px-4 md:px-10 max-w-6xl mx-auto font-[Roboto_Mono] min-h-[80vh] md:h-screen flex flex-col justify-center">
		       <motion.h2
			       className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-wide text-center mb-8 sm:mb-10 md:mt-10"
			       initial={{ opacity: 0, y: 40 }}
			       whileInView={{ opacity: 1, y: 0 }}
			       transition={{ duration: 0.7 }}
			       viewport={{ once: true }}
		       >
			       ABOUT ME
		       </motion.h2>
		       <motion.p
			       className="text-base xs:text-lg sm:text-xl text-gray-400 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
			       initial={{ opacity: 0, y: 40 }}
			       whileInView={{ opacity: 1, y: 0 }}
			       transition={{ duration: 0.7, delay: 0.2 }}
			       viewport={{ once: true }}
		       >
			       Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
		       </motion.p>
		       <div className="flex flex-col md:flex-row gap-10 sm:gap-20 items-start justify-center">
			       {/* About Me Text */}
			       <motion.div className="flex-1 mb-8 md:mb-0 px-4 md:px-0"
				       initial={{ opacity: 0, x: -40 }}
				       whileInView={{ opacity: 1, x: 0 }}
				       transition={{ duration: 0.7, delay: 0.3 }}
				       viewport={{ once: true }}
			       >
				        {/* Briefly introduce yourself here. Example: */}
					   <p className="text-sm md:text-lg text-white mb-3 xs:mb-4">
						   I'm a <span className="font-bold text-indigo-400">[Your Profession]</span> who specializes in [your specialty/interest]. You can explore some of my projects in the <span className="font-bold text-indigo-400">Projects</span> section.
					   </p>
					   {/* Add a call to action or your job status here. Example: */}
					   <p className="text-sm md:text-lg text-white">
						   I'm open to <span className="font-bold text-indigo-400">job opportunities</span> where I can contribute my skills and grow professionally.
					   </p>
							 <Link to="contact" smooth={true} duration={300} offset={-50}>
								 <button className="p-4 bg-indigo-600 mt-3 rounded text-white hover:cursor-pointer hover:bg-indigo-500">Contact me</button>
							 </Link>
			       </motion.div>
			       {/* Skills Section */}
			       <motion.div className="flex-1 px-4 md:px-0"
				       initial={{ opacity: 0, x: 40 }}
				       whileInView={{ opacity: 1, x: 0 }}
				       transition={{ duration: 0.7, delay: 0.4 }}
				       viewport={{ once: true }}
			       >
				       <h3 className="text-xl xs:text-2xl font-bold mb-3 xs:mb-4 text-left">My Skills</h3>
				       <ul className="flex flex-wrap gap-2 xs:gap-3">
					       {/* List your skills below */}
					       {["HTML", "CSS", "JavaScript", "React", "Node.js", "TailwindCSS", "GIT", "Github", "Responsive Design"].map(skill => (
						       <li key={skill} className="bg-gray-200 text-gray-800 font-semibold rounded px-3 xs:px-4 py-1.5 xs:py-2 text-xs md:text-lg shadow-sm">
							       {skill}
						       </li>
					       ))} 
				       </ul>
			       </motion.div>
		       </div>
	       </section>
       );
}
