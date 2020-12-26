import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

export const ToDoContext = React.createContext();

export default function ToDoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);

  function addNewTodo(text) {
    setTodo(prevState => [...prevState, {text: text, id: uuid()}]);
  }

  function clearTodoList() {
    setTodo([]);
  }

  function removeTodoItem(id) {
    setTodo(todo.filter(item => item.id !== id));
  }

  return (
    <ToDoContext.Provider value={{ addNewTodo, todo, clearTodoList, removeTodoItem }}>
      {children}
    </ToDoContext.Provider>
  );
}
