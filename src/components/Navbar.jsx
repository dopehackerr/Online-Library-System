import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const linkBase =
  "px-3 py-2 rounded-lg transition font-medium hover:bg-white/10";
const active =
  "bg-white/20 text-white";
const inactive =
  "text-white/90";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-lime-950 to-lime-600"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 text-white">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-lg font-bold">Online Library</span>
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Home</NavLink>
          <NavLink to="/books" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Browse</NavLink>
          <NavLink to="/add" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Add Book</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
