import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: "frankenstein",
       title: "Frankenstein", 
       author: "Mary Shelley",
       category: "Sci-Fi", 
       description: "Considered a foundational work of science fiction.",
        rating: 4.2 },
    { id: "ender's Game",
       title: "Ender's Game", 
       author: "Orson Scott Card", 
       category: "Fiction",
        description: "A story about a gifted young boy.",
         rating: 4.9 },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        // Add to top of the list
        state.list.unshift(action.payload);
      },
      prepare(book) {
        return {
          payload: {
            ...book,
            id: nanoid(),
            rating: Number(book.rating) || 0,
          },
        };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
