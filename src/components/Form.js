import React, { useState } from 'react';
import { ToDoContext } from '../ToDoContext';

function Form() {
  const { addNewTodo } = React.useContext(ToDoContext);
  const [value, setValue] = useState('');

  return (
    <div className='form-wrapper'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => addNewTodo(value)}>Add</button>
    </div>
  );
}

export default Form;
