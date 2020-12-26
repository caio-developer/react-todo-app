import React, { useState } from 'react';
import { ToDoContext } from '../ToDoContext';

function Form() {
  const { addNewTodo, clearTodoList } = React.useContext(ToDoContext);
  const [value, setValue] = useState('');
  const inputRef = React.useRef();

  return (
    <div className='form-wrapper'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      <button
        onClick={() => {
          addNewTodo(value);
          setValue('');
          inputRef.current.focus();
        }}
      >
        Add
      </button>
      <button onClick={() => clearTodoList()}>Clear</button>
    </div>
  );
}

export default Form;
