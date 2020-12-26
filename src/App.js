import React from 'react';
import Todo from './components/Todo';
import './style.css';
import ToDoContextProvider from './ToDoContext';

function App() {
  return (
    <ToDoContextProvider>
      <div className='todo-wrapper'>
        <Todo />
      </div>
    </ToDoContextProvider>
  );
}

export default App;
