import React from 'react';
import { ToDoContext } from '../ToDoContext';

function TodoItem({ item, index, id }) {
  const { editTodoList, removeTodoItem } = React.useContext(ToDoContext);

  return (
    <li key={item + index}>
      <span>{item.text}</span>
      <button onClick={() => removeTodoItem(item.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
