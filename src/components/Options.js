import React from 'react';

function Options({ items }) {
  if (!items) return null;

  return (
    <div className='option__list'>
      {items.map((item, index) => (
        <button key={item + index}>{item.nome}</button>
      ))}
    </div>
  );
}

export default Options;
