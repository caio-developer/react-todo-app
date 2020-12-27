import React from 'react';
import { ToDoContext } from '../ToDoContext';

function TodoItem({ item, index}) {
  const { editTodoItem, removeTodoItem } = React.useContext(ToDoContext);

  function edit(id) {
    const text = prompt('Qual o novo texto do Todo?');

    editTodoItem(text, id);
  }

  return (
    <li key={item + index}>
      <span>{item.text}</span>
      <div className='item-buttons'>
        <button onClick={() => removeTodoItem(item.id)}>Delete</button>
        <button onClick={() => edit(item.id)}>Edit</button>
      </div>
    </li>
  );
}

export default TodoItem;
