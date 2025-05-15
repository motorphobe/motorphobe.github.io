import { FaGithub, FaDiscord } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[85%] z-50">
      <div className="bg-gray-900/70 backdrop-blur-md rounded-[30px] px-6 py-3 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        <div className="flex justify-between items-center">
          <div className="text-gray-100 text-sm font-semibold">R E V E R B</div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/motorphobe/Reverb"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://discord.gg/7vtWfKeRjm"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaDiscord size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
