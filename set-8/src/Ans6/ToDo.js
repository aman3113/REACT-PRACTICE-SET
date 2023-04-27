import React from "react";

const ToDo = ({ todo, strike = false }) => {
  const style = {
    textDecoration: "line-through",
  };
  return (
    <div>
      <div>
        <h3 style={strike ? style : {}}>{todo.title}</h3>
        <p style={strike ? style : {}}>{todo.description}</p>
        <p>Status: {todo.isCompleted ? "Done" : "Not Done"}</p>
      </div>
    </div>
  );
};

export default ToDo;
