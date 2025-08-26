// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import HeroShapes from "./components/HeroShapes";


import { Toaster } from 'react-hot-toast';

export default function App() {
       return (
	       <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden font-[Roboto_Mono] ">
		       <HeroShapes />
		       <Toaster />
		       <Navbar />
		       <Hero />
		       <About />
		       <Projects />
		       <Contact />
		       <Footer />
	       </div>
       );
}
