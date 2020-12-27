import React from 'react';
import TodoItem from './TodoItem';
import { ToDoContext } from '../ToDoContext';

function TodoList() {
  const { todo } = React.useContext(ToDoContext);

  return (
    <div className='list-wrapper'>
      <ul className='list'>
        {todo.length === 0 ? (
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>No tasks yet</p>
        ) : (
          todo.map((item, index) => <TodoItem item={item} index={index} />)
        )}
      </ul>
    </div>
  );
}

export default TodoList;
