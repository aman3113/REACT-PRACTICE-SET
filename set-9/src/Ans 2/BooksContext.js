import React from "react";
import { createContext, useEffect, useState } from "react";
import { fakeFetch2 } from "../Data";

export const BooksContext = createContext();

// eslint-disable-next-line no-unused-vars
const BooksContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [userData, setUserData] = useState({});
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const getBookDetails = async () => {
      const resp = await fakeFetch2("https://example.com/api/books");
      setBooksData(
        resp.data.books.map((book) => ({ ...book, favorite: false }))
      );
      setUserData(resp.data.user);
    };
    getBookDetails();
  }, []);

  useEffect(() => {
    setFavoriteBooks(booksData.filter((book) => book.favorite));
    setReadBooks(booksData.filter((book) => book.read));
  }, [booksData]);

  return (
    <BooksContext.Provider
      value={{ booksData, setBooksData, favoriteBooks, readBooks, userData }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
