import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";

const AllBooks = () => {
  const { booksData, setBooksData } = useContext(BooksContext);

  const handleAddFavorite = (id) => {
    setBooksData((prev) =>
      prev.map((book) => (book.id === id ? { ...book, favorite: true } : book))
    );
  };

  const handleMarkRead = (id) => {
    setBooksData((prev) =>
      prev.map((book) => (book.id === id ? { ...book, read: true } : book))
    );
  };

  return (
    <div>
      <h1 className="text-lg font-bold m-4">All Books</h1>
      <div className="flex gap-16 flex-wrap">
        {booksData?.map((book) => (
          <Book
            book={book}
            key={book.id}
            handleMarkRead={handleMarkRead}
            handleAddFavorite={handleAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
