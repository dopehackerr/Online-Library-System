import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.list.find(b => b.id === parseInt(id)));

  if (!book) return <p className="p-6">Book not found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-2xl mx-auto space-y-4 bg-white rounded-xl shadow-lg"
    >
      <h1 className="text-3xl font-bold text-indigo-700">{book.title}</h1>
      <p className="text-gray-700">Author: <span className="font-semibold">{book.author}</span></p>
      <p>{book.description}</p>
      <p className="text-yellow-600 font-bold">⭐ {book.rating}</p>
      <Link to="/books" className="inline-block mt-4 text-blue-600 hover:underline">
        ← Back to Browse
      </Link>
    </motion.div>
  );
}
