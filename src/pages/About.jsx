import { motion } from "framer-motion";
import Profile from "../assets/Gemini_Generated_Image_2ra5ds2ra5ds2ra5.png";

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
    <section className="relative min-h-screen text-white px-6 md:px-12 py-24 flex flex-col gap-28 ">
      {/* 🔹 เอฟเฟกต์พื้นหลังแสงเบา */}
      {/* <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-pink-500/20 blur-[100px] rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* ========== ABOUT ME ========== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative z-10">
        {/* 🔸 รูปโปรไฟล์ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center"
        >
          <div className="absolute w-[110%] h-[110%] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-pink-500/40 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
            <img
              src={Profile}
              alt="About Me"
              className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* 🔸 ข้อความแนะนำตัว */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            สวัสดีครับ 👋 ผมเป็นนักพัฒนาเว็บที่หลงใหลในเทคโนโลยีและการออกแบบ  
            ชอบสร้างเว็บไซต์ที่ทั้งสวยงามและรวดเร็ว  
            โดยให้ความสำคัญกับประสบการณ์ผู้ใช้มากที่สุด
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            มีประสบการณ์ใน React, TailwindCSS, และ Node.js  
            สนใจด้าน UI/UX และ Automation ชอบเรียนรู้สิ่งใหม่  
            เพื่อสร้างเว็บที่ตอบโจทย์ผู้ใช้อย่างแท้จริง 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] text-center"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* ========== SKILLS ========== */}
      <div className="max-w-4xl mx-auto w-full relative z-10">
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
              <div className="flex justify-between mb-2 text-sm md:text-base">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
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
