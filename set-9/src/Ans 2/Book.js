import React from "react";
import { useLocation } from "react-router-dom";

const Book = ({
  book,
  handleMarkUnread,
  handleMarkRead,
  handleRemoveFavorite,
  handleAddFavorite,
}) => {
  const { id, title, author, image, read, favorite } = book;
  const { pathname } = useLocation();

  return (
    <div className="border-2 p-1 w-[20%] min-w-[200px] ">
      <div className="h-[250px] w-full">
        <img className="w-full h-full" src={image} alt="book here" />
      </div>
      <p>{id}.</p>
      <p className="font-bold">{title}</p>
      <p>
        By : <span>{author}</span>
      </p>
      {pathname.includes("read") ? (
        <button
          className="block py-1 px-3 bg-gray-200 rounded cursor-pointer my-2"
          onClick={() => handleMarkUnread(id)}
        >
          Mark as Unread
        </button>
      ) : (
        <button
          className={`block py-1 px-3 bg-gray-200 my-2 rounded cursor-pointer`}
          disabled={read ? true : false}
          onClick={() => handleMarkRead(id)}
        >
          {read ? "Already Read" : "Mark as Read "}
        </button>
      )}

      {pathname.includes("favourite") ? (
        <button
          className="block py-1 px-3 bg-gray-200 my-2 rounded cursor-pointer"
          onClick={() => handleRemoveFavorite(id)}
        >
          Remove from Favorite
        </button>
      ) : favorite ? (
        <button className="block py-1 px-3 my-2 bg-gray-200 rounded cursor-pointer">
          Go to Favorite
        </button>
      ) : (
        <button
          onClick={() => handleAddFavorite(id)}
          className="block py-1 my-2 px-3 bg-gray-200 rounded cursor-pointer"
        >
          Add to Favorite
        </button>
      )}
    </div>
  );
};

export default Book;
