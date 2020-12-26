import React from 'react';
import { ToDoContext } from '../ToDoContext';

function TodoList() {
  const { todo } = React.useContext(ToDoContext);

  return (
    <div className='list-wrapper'>
      <ul className='list'>
        {todo.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
