import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import Button from "./components/Button";
import "./app.css";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  // object destructuring
  // ** todos: array of todos,
  // ** setTodos: function that helps us to update array
  // const [todos, setTodos] = useState([{ id: 1, name: 'Test 1', completed: false }])
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    // if there is any
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function addTodo(e) {
    const name = todoNameRef.current.value;

    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });

    todoNameRef.current.value = null;
  }

  const clearTodos = () => {
    const newTodos = todos.filter((task) => task.complete !== true);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <Button btnFunc={addTodo} className="btn-add" value="Add" />
      <Button btnFunc={clearTodos} className="btn-delete" value="Clear done" />
      <div>{todos.length} left to do</div>
    </>
  );
}

export default App;
