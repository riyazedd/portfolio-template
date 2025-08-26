
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ label: "Home", to: "/" },
		{ label: "About", to: "about" },
		{ label: "Projects", to: "projects" },
		{ label: "Contact", to: "contact" },
	];

	return (
		<nav className="fixed uppercase w-full bg-black/80 backdrop-blur-md shadow-lg px-2 xs:px-4 sm:px-8 py-2 md:py-5 flex items-center justify-between z-50 border-b border-gray-800 min-h-[56px] xs:min-h-[64px] font-[Roboto_Mono]">
			{/* Logo and brand */}
			{/* Replace with your name or brand */}
			<div className="ml-2 xs:ml-6 sm:ml-20">
				<span className="text-lg xs:text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">My Portfolio</span>
			</div>
			{/* Desktop nav links vertically centered */}
			<div className="hidden md:flex items-center justify-end h-full mr-2 xs:mr-6 sm:mr-20">
				<ul className="flex gap-4 xs:gap-8 sm:gap-10 text-base xs:text-lg font-medium h-full">
					{navLinks.map((link) => (
						<li key={link.to} className="relative group flex items-center h-full">
							<Link
								to={link.to}
								smooth={true}
								duration={100}
								onClick={() => setMenuOpen(false)}
								className="cursor-pointer px-2 py-1 flex items-center h-full transition-colors duration-200 text-gray-200 hover:text-white focus:text-white"
							>
								{link.label}
								<span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full mt-1" />
							</Link>
						</li>
					))}
				</ul>
			</div>
			{/* Mobile hamburger */}
			<div className="md:hidden ml-auto flex items-center">
				<button
					className="flex flex-col gap-1.5 p-2 rounded hover:bg-gray-800 transition-all h-full justify-center focus:outline-none"
					aria-label="Open menu"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
					<span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
					<span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
				</button>
			</div>
			{/* Mobile menu */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800 flex flex-col items-center py-4 z-40 animate-fade-in">
					<ul className="flex flex-col gap-4 text-lg font-medium w-full text-center">
						{navLinks.map((link) => (
							<li key={link.to} className="w-full">
								<Link
									to={link.to}
									smooth={true}
									duration={100}
									onClick={() => setMenuOpen(false)}
									className="block w-full py-2 text-gray-200 hover:text-white focus:text-white transition-colors duration-200"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
