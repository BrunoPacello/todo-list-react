import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <div className="list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
