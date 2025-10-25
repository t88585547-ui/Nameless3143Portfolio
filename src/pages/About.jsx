import { motion } from "framer-motion";
import Profile from "../assets/Gemini_Generated_Image_2ra5ds2ra5ds2ra5.png"

export default function About() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ];

  return (
    <section className="min-h-screen text-white px-8 py-24 flex flex-col gap-32 relative overflow-hidden">
      {/* เอฟเฟกต์แสงพื้นหลัง */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-pink-500/20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      /> */}

      {/* ส่วน About Me */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 relative z-10">
        {/* รูปภาพ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-pink-500/50 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
            <img
              src={Profile}
              alt="About Me"
              className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* เนื้อหา */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            สวัสดีครับ 👋 ผมเป็นนักพัฒนาเว็บที่หลงใหลในเทคโนโลยีและการออกแบบ  
            ชอบสร้างสรรค์เว็บไซต์ที่ทั้งสวยงามและมีประสิทธิภาพ  
            โดยเน้นประสบการณ์ของผู้ใช้และความเร็วเป็นหลัก
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            มีประสบการณ์ใน React, TailwindCSS, และ Node.js  
            สนใจด้าน UI/UX และระบบอัตโนมัติ ชอบเรียนรู้สิ่งใหม่ ๆ  
            เพื่อพัฒนาทักษะและสร้างเว็บที่ตอบโจทย์ผู้ใช้อย่างแท้จริง
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-white/40 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* ส่วน My Skills */}
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-pink-500">Skills</span>
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 h-3 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
