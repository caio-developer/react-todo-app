import React from 'react';
import { GlobalContext } from '../GlobalContext';

function Header() {
  const { cartCounter } = React.useContext(GlobalContext);

  return <div className='header'>
    <div className='counter__viewer'>
      <p>Counter: {cartCounter}</p>
    </div>
  </div>;
}

export default Header;
