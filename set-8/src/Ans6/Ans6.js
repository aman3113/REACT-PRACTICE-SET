import React, { createContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fakeFetch6 } from "../Data";

export const ToDoContext = createContext();

const Ans6 = () => {
  const [allToDo, setAllToDo] = useState([]);
  const [openToDo, setOpenToDo] = useState([]);
  const [doneToDo, setDoneToDo] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fakeFetch6("https://example.com/api/todos");
      setAllToDo(() => data.data.todos);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Ans-6</h1>
      <h2>To Do List</h2>
      <div>
        <NavLink to="done-todo">Done Todos</NavLink>
      </div>
      <NavLink to="open-todo">Open Todos</NavLink>
      <ToDoContext.Provider
        value={{
          allToDo,
          setAllToDo,
          openToDo,
          setOpenToDo,
          doneToDo,
          setDoneToDo,
        }}
      >
        <Outlet />
      </ToDoContext.Provider>
    </div>
  );
};

export default Ans6;
