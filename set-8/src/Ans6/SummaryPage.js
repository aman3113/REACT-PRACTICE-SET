import React, { useContext } from "react";
import { ToDoContext } from "./Ans6";
import ToDo from "./ToDo";

const SummaryPage = () => {
  const { allToDo, setAllToDo } = useContext(ToDoContext);
  const handleMarkAsDone = (todoId) => {
    const updatedAllToDo = allToDo.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: true,
        };
      }
      return todo;
    });
    setAllToDo(updatedAllToDo);
  };
  return (
    <div>
      {allToDo?.map((todo) => (
        <div>
          <ToDo todo={todo} strike={todo.isCompleted} />
          {!todo.isCompleted && (
            <button onClick={() => handleMarkAsDone(todo.id)}>
              Mark as Done
            </button>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SummaryPage;
