import React from 'react';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';

function Todo() {
  return (
    <div className='todo'>
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default Todo;
