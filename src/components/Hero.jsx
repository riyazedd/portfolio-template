
import { motion } from "framer-motion";


export default function Hero() {
	return (
		<section id="/" className="min-h-[80vh] md:h-screen flex flex-col justify-center items-center  text-white relative overflow-hidden font-[Roboto_Mono] px-2 xs:px-4">
			{/* Profile image */}
			{/* Replace the src with your own profile image in the public/ folder */}
			<motion.img
				src="/profile.jpg" // <-- Replace with your image or update the filename
				alt="Profile"
				className="w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 rounded-full border-4 border-white shadow-xl mb-4 xs:mb-6 z-10 object-cover bg-white bg-opacity-30"
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			/>
			<motion.h1
				className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-2 xs:mb-4 z-10 drop-shadow-lg text-center"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Hey, I'm <span className="text-gray-200">Your Name</span> {/* <-- Replace with your name */}
			</motion.h1>
			<motion.p
				className="text-base xs:text-lg sm:text-xl mb-4 xs:mb-8 z-10 text-center max-w-xs xs:max-w-md sm:max-w-xl font-medium text-gray-200/90"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
			>
				Your Profession <span className="mx-2">|</span> Your Tagline {/* <-- Customize this line */}
			</motion.p>
			<motion.a
				href="#projects"
				className="bg-white text-black px-6 xs:px-8 py-2 xs:py-3 rounded-2xl font-bold hover:bg-gray-200 z-10 shadow-xl transition-all duration-200 text-base xs:text-lg tracking-wide border-2 border-gray-300 hover:scale-105"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
			>
				View My Work
			</motion.a>
		</section>
	);

}
