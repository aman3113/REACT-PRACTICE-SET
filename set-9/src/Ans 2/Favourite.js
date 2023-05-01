import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";

const Favourite = () => {
  const { favoriteBooks, setBooksData } = useContext(BooksContext);
  const handleRemoveFavorite = (id) => {
    setBooksData((prev) =>
      prev.map((book) => (book.id === id ? { ...book, favorite: false } : book))
    );
  };

  return (
    <div>
      <h1 className="text-lg font-bold m-4">Favorite Books</h1>
      <div className="flex gap-16 flex-wrap">
        {favoriteBooks?.map((book) => (
          <Book
            book={book}
            key={book.id}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
