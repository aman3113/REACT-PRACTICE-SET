import React, { useContext, useEffect } from "react";
import { ToDoContext } from "./Ans6";
import ToDo from "./ToDo";

const OpenToDo = () => {
  const { allToDo, openToDo, setOpenToDo } = useContext(ToDoContext);

  useEffect(() => {
    setOpenToDo(allToDo.filter((todo) => !todo.isCompleted));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Open TODOs</h1>
      <h2>Items : {openToDo.length}</h2>
      {openToDo?.map((todo) => (
        <ToDo todo={todo} />
      ))}
      <hr />
    </div>
  );
};

export default OpenToDo;
