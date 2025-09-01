import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((s) => s.books.list);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return books.filter(b =>
      (!category || b.category === category) &&
      (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    );
  }, [books, category, search]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800">
        Browse Books {category ? `— ${category}` : ""}
      </h1>

      <input
        type="text"
        placeholder="🔍 Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md rounded-xl border border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-600">No books found.</p>
      ) : (
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
