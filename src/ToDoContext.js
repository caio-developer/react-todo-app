import React, { useState } from 'react';

export const ToDoContext = React.createContext();

export default function ToDoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);

  function addNewTodo(text) {
    setTodo(prevState => [...prevState, text]);
  }

  return (
    <ToDoContext.Provider value={{ addNewTodo, todo }}>
      {children}
    </ToDoContext.Provider>
  );
}
