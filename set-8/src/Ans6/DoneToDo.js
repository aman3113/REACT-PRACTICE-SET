import React, { useContext, useEffect } from "react";
import { ToDoContext } from "./Ans6";
import ToDo from "./ToDo";

export const DoneToDo = () => {
  const { allToDo, doneToDo, setDoneToDo } = useContext(ToDoContext);

  useEffect(() => {
    setDoneToDo(allToDo.filter((todo) => todo.isCompleted));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Done TODOs</h1>
      <h2> Items: {doneToDo.length}</h2>
      {doneToDo?.map((todo) => (
        <ToDo todo={todo} />
      ))}
      <hr />
    </div>
  );
};
