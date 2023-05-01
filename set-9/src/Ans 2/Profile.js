import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";

const Profile = () => {
  const { userData } = useContext(BooksContext);
  const { name, bio, img } = userData;
  return (
    <div className="border-2 p-3 m-2 w-[300px]">
      <img className="w-full" src={img} alt="user" />
      <p className="font-bold">Name: {name}</p>
      <p className="font-semibold">About: {bio}</p>
    </div>
  );
};

export default Profile;
