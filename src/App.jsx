import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <div className="form-container">
          <AddTodoForm onAddTodo={addTodo} />
        </div>
        <div className="list-container">
          <TodoList
            todos={todos}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
