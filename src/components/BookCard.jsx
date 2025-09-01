import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

export default function BookCard({ book }) {
  const rating = Number(book.rating) || 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative rounded-2xl bg-white p-5 shadow-md ring-1 ring-gray-100 hover:shadow-xl"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
          <p className="text-gray-600">by {book.author}</p>
        </div>
        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700">
          {book.category}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-gray-700">{book.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-800">{rating.toFixed(1)}</span>
        </div>

        <Link
          to={`/book/${book.id}`}
          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700"
        >
          View Details <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
