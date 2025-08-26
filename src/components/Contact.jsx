import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.send(
				"service_e0cr8jq", // replace with your EmailJS service ID
				"template_suixuiy", // replace with your EmailJS template ID
				{
					from_name: name,
					from_email: email,
					message: message,
				},
				"XQxNH4VzLL4d1KEaK" // replace with your EmailJS public key (user ID)
			)
		// TODO: Replace the following EmailJS values with your own from https://www.emailjs.com/
		emailjs
			.send(
				"YOUR_SERVICE_ID", // <-- Replace with your EmailJS service ID
				"YOUR_TEMPLATE_ID", // <-- Replace with your EmailJS template ID
				{
					from_name: name,
					from_email: email,
					message: message,
				},
				"YOUR_PUBLIC_KEY" // <-- Replace with your EmailJS public key
			)
			.then(
				(result) => {
					toast.success("Message sent successfully!");
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					toast.error("Failed to send message. Please try again.");
				}
			);
	};
	return (
		   <section
			   id="contact"
			   className="py-14 px-2 xs:px-4 sm:px-10 max-w-2xl sm:max-w-4xl mx-auto text-center font-[Roboto_Mono] min-h-[80vh] md:h-screen flex flex-col justify-center"
		   >
			   <motion.h2
				   className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 xs:mb-6"
				   initial={{ opacity: 0, y: 40 }}
				   whileInView={{ opacity: 1, y: 0 }}
				   transition={{ duration: 0.7 }}
				   viewport={{ once: true }}
			   >
				   Contact Me
			   </motion.h2>
			   <motion.p
				   className="text-gray-400 mb-4 xs:mb-6 text-sm md:text-lg"
				   initial={{ opacity: 0, y: 40 }}
				   whileInView={{ opacity: 1, y: 0 }}
				   transition={{ duration: 0.7, delay: 0.2 }}
				   viewport={{ once: true }}
			   >
				   Feel free to reach out via email or social media.
			   </motion.p>
			   <motion.form
				   className="flex flex-col gap-3 xs:gap-4 px-4 md:px-0"
				   onSubmit={handleSubmit}
				   initial={{ opacity: 0, y: 40 }}
				   whileInView={{ opacity: 1, y: 0 }}
				   transition={{ duration: 0.7, delay: 0.3 }}
				   viewport={{ once: true }}
			   >
				   <input
					   type="text"
					   placeholder="Your Name"
					   className="p-2 xs:p-3 border rounded-lg text-sm md:text-lg"
					   value={name}
					   onChange={(e) => setName(e.target.value)}
					   required
				   />
				   <input
					   type="email"
					   placeholder="Your Email"
					   className="p-2 xs:p-3 border rounded-lg text-sm md:text-lg"
					   value={email}
					   onChange={(e) => setEmail(e.target.value)}
					   required
				   />
				   <textarea
					   placeholder="Your Message"
					   rows="4"
					   className="p-2 xs:p-3 border rounded-lg text-sm md:text-lg"
					   value={message}
					   onChange={(e) => setMessage(e.target.value)}
					   required
				   ></textarea>
				   <button
					   type="submit"
					   className="bg-indigo-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:cursor-pointer transition-all duration-200 shadow-md text-sm md:text-lg"
				   >
					   Send Message
				   </button>
			   </motion.form>
			   <motion.div
				   className="flex justify-center gap-4 xs:gap-6 mt-6 xs:mt-8 text-xl md:text-2xl"
				   initial={{ opacity: 0, y: 40 }}
				   whileInView={{ opacity: 1, y: 0 }}
				   transition={{ duration: 0.7, delay: 0.4 }}
				   viewport={{ once: true }}
			   >
				   {/* Replace the href values below with your own social links */}
				   {/* Add your social links below */}
				   <a href="#" target="_blank" className="hover:text-indigo-600"><FaGithub /></a>
				   <a href="#" target="_blank" className="hover:text-indigo-600"><FaLinkedin /></a>
				   <a href="#" target="_blank" className="hover:text-indigo-600"><FaTwitter /></a>
			   </motion.div>
		   </section>
	);
}
