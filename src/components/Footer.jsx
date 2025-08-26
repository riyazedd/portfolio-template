export default function Footer() {
	return (
		   <footer className="py-4 xs:py-6 bg-gray-900 text-gray-400 text-center font-[Roboto_Mono] text-xs xs:text-sm">
			   {/* Add your name or brand below */}
			   © {new Date().getFullYear()} Your Name. All rights reserved.
		   </footer>
	);
}
