import { motion } from "framer-motion";
import PortFolioGallery from "../assets/canvas.png";
import PixelPortfolio from "../assets/Screenshot from 2025-10-17 21-57-18.png";
import AnimationPortfolio from "../assets/canvas2.png";
import SpacebgPortfolio from "../assets/swappy-20251025_161411.png";

const myProjects = [
  {
    title: "PortFolio Gallery",
    description: "เว็บโชว์รูปภาพสำหรับนักวาด",
    imageUrl: PortFolioGallery,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://react-tailwind-portfolio-gallery-we-tan.vercel.app/",
    repoUrl: "https://github.com/t88585547-ui",
  },
  {
    title: "Pixel Art Portfolio",
    description: "Portfolio แบบ pixel art",
    imageUrl: PixelPortfolio,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://webdisignagency-rh54.vercel.app/",
    repoUrl: "https://github.com/t88585547-ui",
  },
  {
    title: "Besis JS",
    description: "Html css javascript ธรรมดา",
    imageUrl: AnimationPortfolio,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://portfolio-project-1-gamma.vercel.app/",
    repoUrl: "https://github.com/t88585547-ui",
  },
  {
    title: "Space Background",
    description: "Portfolio แบบ พื้นหลังอวกาศ",
    imageUrl: SpacebgPortfolio,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://portfoliospace-background-8amr.vercel.app/",
    repoUrl: "https://github.com/t88585547-ui/PortfoliospaceBackground.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 text-white overflow-hidden bg-transparent"
    >
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(236,72,153,0.3)]">
            Works
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {myProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-pink-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-52 object-cover rounded-t-2xl group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between min-h-[240px]">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-pink-500/10 text-pink-300 text-xs font-medium px-3 py-1 rounded-full border border-pink-500/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md text-sm font-semibold bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
