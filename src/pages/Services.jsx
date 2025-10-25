import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "รับออกแบบและพัฒนาเว็บไซต์ตามความต้องการ ไม่ว่าจะเป็นเว็บไซต์บริษัท ร้านค้า หรือเว็บส่วนตัว ด้วยเทคโนโลยีสมัยใหม่อย่าง React, TailwindCSS และ Node.js",
      icon: "🌐",
    },
    {
      title: "Frontend Design",
      description:
        "สร้าง UI ที่สวย ทันสมัย และใช้งานง่าย รองรับทุกอุปกรณ์ ทั้งคอมและมือถือ ด้วยประสบการณ์ด้าน UX/UI ที่เข้าใจผู้ใช้จริง ๆ",
      icon: "🎨",
    },
    {
      title: "SEO & Performance",
      description:
        "ปรับแต่งประสิทธิภาพเว็บไซต์ให้โหลดไว ติดอันดับ Google และมอบประสบการณ์ใช้งานที่ราบรื่นทุกแพลตฟอร์ม",
      icon: "⚡",
    },
  ];

  const reasons = [
    {
      title: "ใส่ใจในทุกรายละเอียด",
      text: "ฉันเชื่อว่าเว็บไซต์ที่ดีเริ่มจากการเข้าใจผู้ใช้อย่างแท้จริง ทุกจุดถูกออกแบบให้มีความหมาย",
      icon: "💎",
    },
    {
      title: "ทันเทคโนโลยีเสมอ",
      text: "ใช้เทคโนโลยีใหม่ล่าสุด เช่น React, TailwindCSS, และ Next.js เพื่อให้เว็บเร็ว ปลอดภัย และทันสมัย",
      icon: "🚀",
    },
    {
      title: "ดีไซน์ที่มีเอกลักษณ์",
      text: "ไม่ทำเว็บให้เหมือนใคร — ฉันออกแบบด้วยสไตล์ที่สะท้อนตัวตนของคุณ และประสบการณ์ผู้ใช้ที่ดีที่สุด",
      icon: "🌈",
    },
  ];

  return (
    <section className="relative text-white px-6 py-24 overflow-hidden">
      {/* 🔮 พื้นหลังเรืองแสงเบา ๆ แบบ optimized */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" /> */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-500/20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ====== Services Section ====== */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-28">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto"
        >
          ฉันมอบบริการที่เน้นคุณภาพ ความเร็ว และดีไซน์ที่โดดเด่น  
          เพื่อช่วยให้ธุรกิจของคุณเติบโตบนโลกดิจิทัล 🌍
        </motion.p>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 70,
              }}
              className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all duration-500"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ====== Why Choose Me Section ====== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Why{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Me 💫
          </span>
        </motion.h2>

        <p className="text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          เพราะฉันไม่ได้แค่เขียนโค้ด — แต่สร้างสิ่งที่ช่วยให้แบรนด์ของคุณโดดเด่นและทรงพลังในโลกดิจิทัล
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
