import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", category: "", description: "", rating: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError("⚠️ All fields are required");
      return;
    }
    dispatch(addBook(form));
    navigate("/books");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-4 text-emerald-800">Add New Book</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" onChange={handleChange} className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500" />
        <input name="author" placeholder="Author" onChange={handleChange} className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500" />
        <input name="category" placeholder="Category" onChange={handleChange} className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500"></textarea>
        <input name="rating" type="number" step="0.1" placeholder="Rating" onChange={handleChange} className="border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-lime-950 to-lime-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:shadow-xl transition"
        >
          ➕ Add Book
        </motion.button>
      </form>
    </motion.div>
  );
}
