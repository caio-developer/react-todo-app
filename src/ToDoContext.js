import React, { useState } from 'react';

export const ToDoContext = React.createContext();

export default function ToDoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);

  function addNewTodo(text) {
    setTodo(prevState => [...prevState, text]);
  }

  function clearTodoList() {
    setTodo([]);
  }

  return (
    <ToDoContext.Provider value={{ addNewTodo, todo, clearTodoList }}>
      {children}
    </ToDoContext.Provider>
  );
}
