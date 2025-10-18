import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 overflow-hidden">
      {/* ชั้นมืดโปร่งใส */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* เอฟเฟกต์แสงฟ้าเบื้องหลัง */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/30 blur-[180px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* กล่องฟอร์มหลัก */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
      >
        {/* ลอยเบา ๆ */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-2 drop-shadow-lg">
            ติดต่อฉัน
          </h2>
          <p className="text-center text-gray-300 mb-8">
            อยากร่วมงานหรือพูดคุยกัน? ส่งข้อความถึงฉันได้เลย 💫
          </p>

          {/* ฟอร์ม */}
          <form className="flex flex-col space-y-5">
            <div>
              <label className="block text-sm mb-1">ชื่อของคุณ</label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="กรอกชื่อของคุณ..."
              />
            </div>

            <div>
              <label className="block text-sm mb-1">อีเมล</label>
              <input
                type="email"
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">ข้อความ</label>
              <textarea
                rows="5"
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="อยากจะบอกอะไรฉันไหม..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.6)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold shadow-lg transition-all"
            >
              ส่งข้อความ
            </motion.button>
          </form>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 flex justify-center gap-8 text-3xl"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaDiscord />
            </a>
            <a
              href="mailto:you@example.com"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
