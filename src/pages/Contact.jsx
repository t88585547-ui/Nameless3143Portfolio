import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 ">
      {/* 🔹 เอฟเฟกต์แสงเบา ๆ */}
      {/* <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* 🔹 กล่องหลัก */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
      >
        <h2 className="text-4xl font-bold text-center mb-2 drop-shadow-lg">
          ติดต่อฉัน
        </h2>
        <p className="text-center text-gray-300 mb-8">
          มีไอเดียหรือโปรเจกต์ที่อยากร่วมงาน? ส่งข้อความหาฉันได้เลย 💬
        </p>

        {/* 🔹 ฟอร์มติดต่อ */}
        <form
          className="flex flex-col space-y-5"
          action="https://formsubmit.co/t88585547@email.com"
          method="POST"
        >
          <div>
            <label className="block text-sm mb-1">ชื่อของคุณ</label>
            <input
              type="text"
              required
              name="name"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="กรอกชื่อของคุณ..."
            />
          </div>

          <div>
            <label className="block text-sm mb-1">อีเมล</label>
            <input
              type="email"
              required
              name="email"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">ข้อความ</label>
            <textarea
              rows="5"
              required
              name="message"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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

        {/* 🔹 ช่องทางติดต่อ / โซเชียล */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 grid grid-cols-3 gap-6 justify-items-center text-3xl"
        >
          <a
            href="https://github.com/t88585547-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/TANONGS36564502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaTwitter />
          </a>

          <a
            href="mailto:t88585547@gmail.com"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
