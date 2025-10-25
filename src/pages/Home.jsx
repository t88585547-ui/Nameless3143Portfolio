import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_0_12px_rgba(236,72,153,0.3)]">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Nameless3143
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Front-End Developer &nbsp;|&nbsp; UI/UX Enthusiast
        </p>

        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          I love building beautiful, fast, and responsive web applications.
          My passion lies in blending creativity and clean code to craft
          digital experiences that truly stand out.
        </p>

        {/* ปุ่ม */}
        <div className="flex justify-center gap-4">
          <NavLink
            to="/portfolio"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300"
          >
            View My Work
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 border border-pink-500 hover:bg-pink-600/20 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
          >
            Contact Me
          </NavLink>
        </div>
      </motion.div>

      {/* Skills / Tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-16 flex flex-wrap justify-center gap-3 text-sm text-gray-300"
      >
        {[
          "HTML",
          "CSS",
          "React",
          "JavaScript",
          "TailwindCSS",
          "Node.js",
          "Vite",
          "UI Design",
        ].map((skill) => (
          <span
            key={skill}
            className="border border-gray-600 px-4 py-1 rounded-full transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:text-pink-400 backdrop-blur-sm bg-white/5"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
