import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
  const popularBooks = [
    { id: "frankenstein", title: "Frankenstein", author: "Mary Shelley", category: "Sci-Fi", description: "Considered a foundational work of science fiction.", rating: 4.2 },
    { id: "ender's Game", title: "Ender's Game", author: "Orson Scott Card", category: "Fiction", description: "A story about a gifted young boy.", rating: 4.9 },
  ];

  return (
    <div className="space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-emerald-800"
      >
        Welcome to Your Digital Library 📚
      </motion.h1>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c}
              to={`/books/${c}`}
              className="rounded-xl bg-white p-5 text-center font-medium text-emerald-400 shadow ring-1 ring-gray-100 transition hover:shadow-lg"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Popular Books</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {popularBooks.map((b) => (
            <Link
              key={b.id}
              to={`/book/${b.id}`}
              className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div className="text-lg font-semibold text-gray-900">{b.title}</div>
              <div className="text-gray-600">by {b.author}</div>
              <div className="mt-2 text-sm text-gray-700 line-clamp-2">{b.description}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
