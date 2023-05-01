import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";

const ReadBooks = () => {
  const { readBooks, setBooksData } = useContext(BooksContext);
  const handleMarkUnread = (id) => {
    setBooksData((prev) =>
      prev.map((book) => (book.id === id ? { ...book, read: false } : book))
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-lg font-bold m-4">Read Books</h1>
        <div className="flex gap-16 flex-wrap">
          {readBooks?.map((book) => (
            <Book
              book={book}
              handleMarkUnread={handleMarkUnread}
              key={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
