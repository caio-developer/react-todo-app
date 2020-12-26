import React from 'react';
import { ToDoContext } from '../ToDoContext';

function TodoItem({ item, index }) {
  const { editTodoList } = React.useContext(ToDoContext);

  function edit(index) {
    let newValue = prompt('Qual o novo valor?');
    editTodoList(newValue, index)
  }

  return (
    <li key={item + index}>
      <span>{item}</span>
    </li>
  );
}

export default TodoItem;
