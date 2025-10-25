export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-6 text-center border-t border-white/10">
      <p className="text-sm">
        © {new Date().getFullYear()} Nameless3143. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/t88585547-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://x.com/TANONGS36564502"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Twitter
        </a>
        <a
          href="mailto:t88585547@gmail.com"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
